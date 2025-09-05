/* eslint-disable camelcase */
import { render, screen, cleanup } from "@testing-library/react";
import { test, expect, vi, beforeEach, afterEach } from "vitest";

import { RepositoryList } from "./RepositoryList";

import { Repository } from "@/types/repository";

// Next.js Link コンポーネントのモック
vi.mock("next/link", () => {
  return {
    default: ({ href, children, className }: any) => {
      return (
        <a href={href} className={className}>
          {children}
        </a>
      );
    },
  };
});

// RepositoryCard コンポーネントのモック
vi.mock("./RepositoryCard", () => {
  return {
    default: ({ repository }: { repository: Repository }) => {
      return (
        <div data-testid={`mock-repository-card-${repository.id}`}>
          {repository.full_name}
        </div>
      );
    },
  };
});

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  cleanup();
});
const mockRepositories: Repository[] = [
  {
    id: 1,
    name: "react",
    full_name: "facebook/react",
    description: "The library for web and native user interfaces.",
    html_url: "https://github.com/facebook/react",
    clone_url: "https://github.com/facebook/react.git",
    ssh_url: "git@github.com:facebook/react.git",
    stargazers_count: 238587,
    watchers_count: 238587,
    forks_count: 49245,
    open_issues_count: 1034,
    language: "JavaScript",
    created_at: "2013-05-24T16:15:54Z",
    updated_at: "2025-09-03T09:17:00Z",
    pushed_at: "2025-09-02T21:38:57Z",
    size: 1108658,
    default_branch: "main",
    topics: ["react", "javascript"],
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
    },
    owner: {
      login: "facebook",
      id: 69631,
      avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      html_url: "https://github.com/facebook",
      type: "Organization",
    },
    languages_url: "https://api.github.com/repos/facebook/react/languages",
    commits_url: "https://api.github.com/repos/facebook/react/commits{/sha}",
  },
  {
    id: 2,
    name: "vue",
    full_name: "vuejs/vue",
    description:
      "Vue.js is a progressive, incrementally-adoptable JavaScript framework.",
    html_url: "https://github.com/vuejs/vue",
    clone_url: "https://github.com/vuejs/vue.git",
    ssh_url: "git@github.com:vuejs/vue.git",
    stargazers_count: 207000,
    watchers_count: 207000,
    forks_count: 33700,
    open_issues_count: 500,
    language: "JavaScript",
    created_at: "2013-07-29T03:24:51Z",
    updated_at: "2025-09-03T09:20:34Z",
    pushed_at: "2024-10-10T07:24:15Z",
    size: 32152,
    default_branch: "main",
    topics: ["vue", "javascript", "framework"],
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
    },
    owner: {
      login: "vuejs",
      id: 6128107,
      avatar_url: "https://avatars.githubusercontent.com/u/6128107?v=4",
      html_url: "https://github.com/vuejs",
      type: "Organization",
    },
    languages_url: "https://api.github.com/repos/vuejs/vue/languages",
    commits_url: "https://api.github.com/repos/vuejs/vue/commits{/sha}",
  },
];

test("正常にレンダリングされること", () => {
  render(<RepositoryList repositories={mockRepositories} />);

  // モックされたRepositoryCardが表示されること
  expect(screen.getByTestId("mock-repository-card-1")).toBeInTheDocument();
  expect(screen.getByTestId("mock-repository-card-2")).toBeInTheDocument();

  // リポジトリ名が表示されること
  expect(screen.getByText("facebook/react")).toBeInTheDocument();
  expect(screen.getByText("vuejs/vue")).toBeInTheDocument();
});

test("空のリポジトリリストで適切なメッセージが表示されること", () => {
  render(<RepositoryList repositories={[]} />);

  expect(
    screen.getByText("リポジトリが見つかりませんでした"),
  ).toBeInTheDocument();
  expect(
    screen.getByText("別のキーワードで検索してみてください"),
  ).toBeInTheDocument();
});

test("ページネーションが正しく表示されること（1ページ目、次のページあり）", () => {
  render(
    <RepositoryList
      repositories={mockRepositories}
      hasMore={true}
      currentPage={1}
      query="react"
    />,
  );

  // 現在のページ情報が表示されること
  expect(screen.getByText("ページ 1")).toBeInTheDocument();

  // 次のページボタンが表示されること
  const nextButton = screen.getByText("次のページ");
  expect(nextButton).toBeInTheDocument();
  expect(nextButton.closest("a")).toHaveAttribute("href", "/?q=react&page=2");

  // 前のページボタンは表示されないこと（1ページ目なので）
  expect(screen.queryByText("前のページ")).not.toBeInTheDocument();
});

test("ページネーションが正しく表示されること（2ページ目、前後のページあり）", () => {
  render(
    <RepositoryList
      repositories={mockRepositories}
      hasMore={true}
      currentPage={2}
      query="react"
    />,
  );

  // 現在のページ情報が表示されること
  expect(screen.getByText("ページ 2")).toBeInTheDocument();

  // 前のページボタンが表示されること
  const prevButton = screen.getByText("前のページ");
  expect(prevButton).toBeInTheDocument();
  expect(prevButton.closest("a")).toHaveAttribute("href", "/?q=react&page=1");

  // 次のページボタンが表示されること
  const nextButton = screen.getByText("次のページ");
  expect(nextButton).toBeInTheDocument();
  expect(nextButton.closest("a")).toHaveAttribute("href", "/?q=react&page=3");
});

test("最後のページで適切なメッセージが表示されること", () => {
  render(
    <RepositoryList
      repositories={mockRepositories}
      hasMore={false}
      currentPage={3}
      query="react"
    />,
  );

  // 現在のページ情報が表示されること
  expect(screen.getByText("ページ 3")).toBeInTheDocument();

  // 前のページボタンが表示されること
  expect(screen.getByText("前のページ")).toBeInTheDocument();

  // 次のページボタンは表示されないこと
  expect(screen.queryByText("次のページ")).not.toBeInTheDocument();

  // すべて表示済みのメッセージが表示されること
  expect(
    screen.getByText("すべてのリポジトリを表示しました"),
  ).toBeInTheDocument();
});

test("クエリがない場合はページネーションが表示されないこと", () => {
  render(
    <RepositoryList
      repositories={mockRepositories}
      hasMore={true}
      currentPage={1}
    />,
  );

  // ページネーション関連の要素が表示されないこと
  expect(screen.queryByText("ページ 1")).not.toBeInTheDocument();
  expect(screen.queryByText("次のページ")).not.toBeInTheDocument();
  expect(screen.queryByText("前のページ")).not.toBeInTheDocument();
});

test("検索クエリの特殊文字が正しくエンコードされること", () => {
  const queryWithSpecialChars = "react & vue.js";

  render(
    <RepositoryList
      repositories={mockRepositories}
      hasMore={true}
      currentPage={1}
      query={queryWithSpecialChars}
    />,
  );

  const nextButton = screen.getByText("次のページ");
  expect(nextButton.closest("a")).toHaveAttribute(
    "href",
    "/?q=react%20%26%20vue.js&page=2",
  );
});

test("デフォルトプロパティが正しく適用されること", () => {
  render(<RepositoryList repositories={mockRepositories} query="react" />);

  // デフォルトでcurrentPage=1が適用されること
  expect(screen.getByText("ページ 1")).toBeInTheDocument();

  // hasMore=undefinedでは次のページボタンは表示されないこと
  expect(screen.queryByText("次のページ")).not.toBeInTheDocument();
});

test("1つのリポジトリでも正しく表示されること", () => {
  render(<RepositoryList repositories={[mockRepositories[0]]} />);

  expect(screen.getByTestId("mock-repository-card-1")).toBeInTheDocument();
  expect(screen.getByText("facebook/react")).toBeInTheDocument();

  // 空のメッセージは表示されないこと
  expect(
    screen.queryByText("リポジトリが見つかりませんでした"),
  ).not.toBeInTheDocument();
});

test("ページネーションリンクのアクセシビリティが適切に設定されていること", () => {
  render(
    <RepositoryList
      repositories={mockRepositories}
      hasMore={true}
      currentPage={2}
      query="react"
    />,
  );

  // リンクがアクセシブルであること
  const prevLink = screen.getByText("前のページ").closest("a");
  const nextLink = screen.getByText("次のページ").closest("a");

  expect(prevLink).toHaveAttribute("href");
  expect(nextLink).toHaveAttribute("href");
});
