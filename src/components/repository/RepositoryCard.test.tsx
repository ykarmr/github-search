/* eslint-disable camelcase */
import { render, screen, cleanup } from "@testing-library/react";
import { test, expect, vi, beforeEach, afterEach } from "vitest";

import { RepositoryCard } from "./RepositoryCard";

import { Repository } from "@/types/repository";

// Next.js Image コンポーネントのモック
vi.mock("next/image", () => {
  return {
    default: ({ src, alt, width, height, className }: any) => {
      return (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      );
    },
  };
});

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

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  cleanup();
});
const mockRepository: Repository = {
  id: 10270250,
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
  topics: ["declarative", "frontend", "javascript", "library", "react", "ui"],
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
};

test("正常にレンダリングされること", () => {
  render(<RepositoryCard repository={mockRepository} />);

  // カードが表示されること
  expect(
    screen.getByTestId(`repository-card-${mockRepository.id}`),
  ).toBeInTheDocument();

  // リポジトリ名が表示されること
  expect(screen.getByText(mockRepository.full_name)).toBeInTheDocument();

  // アバターが表示されること
  expect(
    screen.getByAltText(`${mockRepository.owner.login} avatar`),
  ).toBeInTheDocument();
});

test("リポジトリの説明が表示されること", () => {
  render(<RepositoryCard repository={mockRepository} />);

  if (mockRepository.description) {
    expect(screen.getByText(mockRepository.description)).toBeInTheDocument();
  }
});

test("リポジトリの統計情報が正しく表示されること", () => {
  render(<RepositoryCard repository={mockRepository} />);

  // スター数が表示されること（フォーマットされた値）
  const starElements = screen.getAllByText("238.6K");
  expect(starElements.length).toBeGreaterThan(0);

  // フォーク数が表示されること
  expect(screen.getByText("49.2K")).toBeInTheDocument();

  // イシュー数が表示されること
  expect(screen.getByText("1.0K")).toBeInTheDocument();
});

test("プログラミング言語が表示されること", () => {
  render(<RepositoryCard repository={mockRepository} />);

  if (mockRepository.language) {
    expect(screen.getByText(mockRepository.language)).toBeInTheDocument();
  }
});

test("トピックが表示されること", () => {
  render(<RepositoryCard repository={mockRepository} />);

  // 最初の5つのトピックが表示されること
  expect(screen.getByText("declarative")).toBeInTheDocument();
  expect(screen.getByText("frontend")).toBeInTheDocument();
  expect(screen.getByText("javascript")).toBeInTheDocument();
  expect(screen.getByText("library")).toBeInTheDocument();
  expect(screen.getByText("react")).toBeInTheDocument();

  // 6つ目のトピック（ui）は表示されない（5つまでの制限）
  expect(screen.queryByText("ui")).not.toBeInTheDocument();

  // 残りのトピック数が表示されること
  expect(screen.getByText("+1 more")).toBeInTheDocument();
});

test("リポジトリ詳細ページへのリンクが正しく設定されること", () => {
  render(<RepositoryCard repository={mockRepository} />);

  const link = screen.getByRole("link");
  expect(link).toHaveAttribute(
    "href",
    `/repository/${mockRepository.owner.login}/${mockRepository.name}`,
  );
});

test("説明がないリポジトリでも正常に表示されること", () => {
  const repositoryWithoutDescription = {
    ...mockRepository,
    description: null,
  };

  render(<RepositoryCard repository={repositoryWithoutDescription} />);

  // カードが表示されること
  expect(
    screen.getByTestId(`repository-card-${mockRepository.id}`),
  ).toBeInTheDocument();

  // リポジトリ名は表示されること
  expect(screen.getByText(mockRepository.full_name)).toBeInTheDocument();

  // 説明部分が表示されないこと
  if (mockRepository.description) {
    expect(
      screen.queryByText(mockRepository.description),
    ).not.toBeInTheDocument();
  }
});

test("言語がないリポジトリでも正常に表示されること", () => {
  const repositoryWithoutLanguage = {
    ...mockRepository,
    language: null,
  };

  render(<RepositoryCard repository={repositoryWithoutLanguage} />);

  // カードが表示されること
  expect(
    screen.getByTestId(`repository-card-${mockRepository.id}`),
  ).toBeInTheDocument();

  // 言語部分が表示されないこと
  expect(screen.queryByText("JavaScript")).not.toBeInTheDocument();
});

test("トピックがないリポジトリでも正常に表示されること", () => {
  const repositoryWithoutTopics = {
    ...mockRepository,
    topics: [],
  };

  render(<RepositoryCard repository={repositoryWithoutTopics} />);

  // カードが表示されること
  expect(
    screen.getByTestId(`repository-card-${mockRepository.id}`),
  ).toBeInTheDocument();

  // トピック部分が表示されないこと
  mockRepository.topics.forEach((topic) => {
    expect(screen.queryByText(topic)).not.toBeInTheDocument();
  });
});

test("統計情報が0でも正常に表示されること", () => {
  const repositoryWithZeroStats = {
    ...mockRepository,
    stargazers_count: 0,
    forks_count: 0,
    watchers_count: 0,
    open_issues_count: 0,
  };

  render(<RepositoryCard repository={repositoryWithZeroStats} />);

  // ゼロの値が表示されること
  const zeroElements = screen.getAllByText("0");
  expect(zeroElements).toHaveLength(4); // stars, forks, watchers, issues
});

test("アバター画像の属性が正しく設定されること", () => {
  render(<RepositoryCard repository={mockRepository} />);

  const avatar = screen.getByAltText(`${mockRepository.owner.login} avatar`);
  expect(avatar).toHaveAttribute("src", mockRepository.owner.avatar_url);
  expect(avatar).toHaveAttribute("width", "48");
  expect(avatar).toHaveAttribute("height", "48");
});

test("言語インジケータのスタイルが正しく設定されること", () => {
  render(<RepositoryCard repository={mockRepository} />);

  if (mockRepository.language) {
    // 言語インジケータのaria-labelが正しく設定されていること
    const languageIndicator = screen.getByLabelText(
      `${mockRepository.language} language indicator`,
    );
    expect(languageIndicator).toBeInTheDocument();
  }
});
