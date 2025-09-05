/* eslint-disable camelcase */
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { test, expect, vi, beforeEach, afterEach } from "vitest";

import SearchResults from "./SearchResults";

// モックアクションの結果
const mockSuccessResult = {
  data: {
    total_count: 100,
    incomplete_results: false,
    items: [
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
        forks_count: 49219,
        open_issues_count: 1007,
        language: "JavaScript",
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2024-01-14T10:30:00Z",
        pushed_at: "2024-01-13T15:45:00Z",
        owner: {
          login: "facebook",
          id: 69631,
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          html_url: "https://github.com/facebook",
          type: "Organization",
        },
      },
      {
        id: 2,
        name: "vue",
        full_name: "vuejs/vue",
        description: "Vue.js is a progressive framework.",
        html_url: "https://github.com/vuejs/vue",
        clone_url: "https://github.com/vuejs/vue.git",
        ssh_url: "git@github.com:vuejs/vue.git",
        stargazers_count: 207000,
        watchers_count: 207000,
        forks_count: 33649,
        open_issues_count: 355,
        language: "TypeScript",
        topics: ["framework", "frontend", "javascript", "vue"],
        created_at: "2013-07-29T03:24:51Z",
        updated_at: "2024-01-14T08:20:00Z",
        pushed_at: "2024-01-12T14:30:00Z",
        owner: {
          login: "vuejs",
          id: 6128107,
          avatar_url: "https://avatars.githubusercontent.com/u/6128107?v=4",
          html_url: "https://github.com/vuejs",
          type: "Organization",
        },
      },
    ],
  },
  success: true,
  error: null,
};

const mockEmptyResult = {
  data: {
    total_count: 0,
    incomplete_results: false,
    items: [],
  },
  success: true,
  error: null,
};

const mockErrorResult = {
  data: null,
  success: false,
  error: "GitHub API request failed",
};

// モック関数を作成
const mockSearchRepositoriesAction = vi.fn();

// アクションのモック
vi.mock("@/actions/repository-actions", () => {
  return {
    get searchRepositoriesAction() {
      return mockSearchRepositoriesAction;
    },
  };
});

// 子コンポーネントのモック
vi.mock("./EmptyState", () => {
  return {
    default: () => {
      return <div data-testid="empty-state">EmptyState Component</div>;
    },
  };
});

vi.mock("./NoResults", () => {
  return {
    default: ({ query }: { query: string }) => {
      return <div data-testid="no-results">NoResults for: {query}</div>;
    },
  };
});

vi.mock("@/components/repository/RepositoryList", () => {
  return {
    default: ({ repositories, hasMore, currentPage, query }: any) => {
      return (
        <div data-testid="repository-list">
          <div data-testid="repository-count">
            {repositories.length} repositories
          </div>
          <div data-testid="has-more">{hasMore ? "Has more" : "No more"}</div>
          <div data-testid="current-page">Page {currentPage}</div>
          <div data-testid="query">Query: {query}</div>
        </div>
      );
    },
  };
});

beforeEach(() => {
  mockSearchRepositoriesAction.mockClear();
});

afterEach(() => {
  cleanup();
});

test("クエリがない場合はEmptyStateが表示されること", async () => {
  const page = await SearchResults({ page: 1 });
  render(page);

  expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  expect(mockSearchRepositoriesAction).not.toHaveBeenCalled();
});

test("クエリが空文字の場合はEmptyStateが表示されること", async () => {
  const page = await SearchResults({ query: "", page: 1 });
  render(page);

  expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  expect(mockSearchRepositoriesAction).not.toHaveBeenCalled();
});

test("クエリが空白のみの場合はEmptyStateが表示されること", async () => {
  const page = await SearchResults({ query: "   ", page: 1 });
  render(page);

  expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  expect(mockSearchRepositoriesAction).not.toHaveBeenCalled();
});

test("検索が成功した場合はRepositoryListが表示されること", async () => {
  mockSearchRepositoriesAction.mockResolvedValue(mockSuccessResult);
  const page = await SearchResults({ query: "react", page: 1 });
  render(page);

  await waitFor(() => {
    expect(mockSearchRepositoriesAction).toHaveBeenCalledWith(
      "react",
      "stars",
      "desc",
      30,
      1,
    );
    expect(screen.getByTestId("repository-list")).toBeInTheDocument();
  });
});

test("検索結果がある場合、適切なプロパティが渡されること", async () => {
  mockSearchRepositoriesAction.mockResolvedValue(mockSuccessResult);

  const page = await SearchResults({ query: "react", page: 1 });
  render(page);

  await waitFor(() => {
    expect(screen.getByTestId("repository-count")).toHaveTextContent(
      "2 repositories",
    );
    expect(screen.getByTestId("has-more")).toHaveTextContent("Has more");
    expect(screen.getByTestId("current-page")).toHaveTextContent("Page 1");
    expect(screen.getByTestId("query")).toHaveTextContent("Query: react");
  });
});

test("100件未満の結果の場合hasMoreがfalseになること", async () => {
  const resultWithoutMore = {
    ...mockSuccessResult,
    data: {
      ...mockSuccessResult.data,
      total_count: 30, //
    },
  };

  mockSearchRepositoriesAction.mockResolvedValue(resultWithoutMore);

  const page = await SearchResults({ query: "react", page: 1 });
  render(page);

  await waitFor(() => {
    expect(screen.getByTestId("has-more")).toHaveTextContent("No more");
  });
});

test("次のページがない場合hasMoreがfalseになること", async () => {
  const resultWithMore = {
    ...mockSuccessResult,
    data: {
      ...mockSuccessResult.data,
      total_count: 150,
    },
  };

  mockSearchRepositoriesAction.mockResolvedValue(resultWithMore);

  const page = await SearchResults({ query: "react", page: 1 });
  render(page);

  await waitFor(() => {
    expect(screen.getByTestId("has-more")).toHaveTextContent("Has more");
  });
});

test("検索結果が0件の場合はNoResultsが表示されること", async () => {
  mockSearchRepositoriesAction.mockResolvedValue(mockEmptyResult);

  const page = await SearchResults({ query: "nonexistent", page: 1 });
  render(page);

  await waitFor(() => {
    expect(screen.getByTestId("no-results")).toBeInTheDocument();
    expect(screen.getByTestId("no-results")).toHaveTextContent(
      "NoResults for: nonexistent",
    );
  });
});

test("エラーが発生した場合は例外がthrowされること", async () => {
  mockSearchRepositoriesAction.mockResolvedValue(mockErrorResult);

  await expect(async () => {
    const page = await SearchResults({ query: "error", page: 1 });
    render(page);
  }).rejects.toThrow("GitHub API request failed");
});

test("data.successがfalseの場合は例外がthrowされること", async () => {
  const nullDataResult = {
    data: null,
    success: false,
    error: "API Error",
  };

  mockSearchRepositoriesAction.mockResolvedValue(nullDataResult);

  await expect(async () => {
    const page = await SearchResults({ query: "failed", page: 1 });
    render(page);
  }).rejects.toThrow("API Error");
});

test("ページ番号が正しく渡されること", async () => {
  mockSearchRepositoriesAction.mockResolvedValue(mockSuccessResult);

  const page = await SearchResults({ query: "react", page: 2 });
  render(page);

  await waitFor(() => {
    expect(mockSearchRepositoriesAction).toHaveBeenCalledWith(
      "react",
      "stars",
      "desc",
      30,
      2,
    );
    expect(screen.getByTestId("current-page")).toHaveTextContent("Page 2");
  });
});

test("クエリに特殊文字が含まれていても正常に動作すること", async () => {
  mockSearchRepositoriesAction.mockResolvedValue(mockSuccessResult);

  const page = await SearchResults({ query: "react & vue.js", page: 1 });
  render(page);

  await waitFor(() => {
    expect(screen.getByTestId("query")).toHaveTextContent(
      "Query: react & vue.js",
    );
  });
});
