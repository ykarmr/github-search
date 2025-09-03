import { expect, test, describe, vi, beforeEach, afterEach } from "vitest";

import {
  searchRepositoriesAction,
  getRepositoryDetailAction,
} from "./repository-actions";

import * as githubApi from "@/lib/github-api";

// GitHub APIのモック
vi.mock("@/lib/github-api", () => {
  return {
    searchRepositories: vi.fn(),
    getRepositoryDetail: vi.fn(),
    validateSearchQuery: vi.fn(),
    GitHubApiError: class GitHubApiError extends Error {
      constructor(
        message: string,
        public status?: number,
        public code?: string,
      ) {
        super(message);
        this.name = "GitHubApiError";
      }
    },
  };
});

const mockSearchRepositories = vi.mocked(githubApi.searchRepositories);
const mockGetRepositoryDetail = vi.mocked(githubApi.getRepositoryDetail);
const mockValidateSearchQuery = vi.mocked(githubApi.validateSearchQuery);

describe("Repository Actions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // コンソールログをモック
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("searchRepositoriesAction", () => {
    test("正常な検索結果を返す", async () => {
      const mockResult = {
        total_count: 100,
        incomplete_results: false,
        items: [
          {
            id: 1,
            name: "test-repo",
            full_name: "user/test-repo",
            description: "Test repository",
            stargazers_count: 50,
            topics: ["javascript"],
          },
        ],
      };

      mockValidateSearchQuery.mockReturnValue(true);
      mockSearchRepositories.mockResolvedValue(mockResult as any);

      const result = await searchRepositoriesAction("react");

      expect(mockValidateSearchQuery).toHaveBeenCalledWith("react");
      expect(result.data).toBeDefined();
      expect(result.error).toBeUndefined();
    });

    test("無効な検索クエリの場合はエラーを返す", async () => {
      mockValidateSearchQuery.mockReturnValue(false);

      const result = await searchRepositoriesAction("");

      expect(result).toEqual({
        error: "有効な検索クエリを入力してください",
      });
      expect(mockSearchRepositories).not.toHaveBeenCalled();
    });

    test("per_pageが範囲外の場合はエラーを返す", async () => {
      mockValidateSearchQuery.mockReturnValue(true);

      let result = await searchRepositoriesAction("react", "stars", "desc", 0);
      expect(result).toEqual({
        error: "per_pageは1から100の間で指定してください",
      });

      result = await searchRepositoriesAction("react", "stars", "desc", 101);
      expect(result).toEqual({
        error: "per_pageは1から100の間で指定してください",
      });
    });

    test("pageが1未満の場合はエラーを返す", async () => {
      mockValidateSearchQuery.mockReturnValue(true);

      const result = await searchRepositoriesAction(
        "react",
        "stars",
        "desc",
        30,
        0,
      );
      expect(result).toEqual({
        error: "pageは1以上で指定してください",
      });
    });

    test("GitHub APIエラーの場合は適切なエラーメッセージを返す", async () => {
      mockValidateSearchQuery.mockReturnValue(true);
      const apiError = new githubApi.GitHubApiError(
        "API rate limit exceeded",
        403,
      );
      mockSearchRepositories.mockRejectedValue(apiError);

      const result = await searchRepositoriesAction("react");

      expect(result).toEqual({
        error: "API rate limit exceeded",
      });
    });

    test("予期しないエラーの場合は汎用エラーメッセージを返す", async () => {
      mockValidateSearchQuery.mockReturnValue(true);
      mockSearchRepositories.mockRejectedValue(new Error("Network error"));

      const result = await searchRepositoriesAction("react");

      expect(result).toEqual({
        error: "リポジトリの検索中にエラーが発生しました",
      });
    });
  });

  describe("getRepositoryDetailAction", () => {
    test("正常なリポジトリ詳細を返す", async () => {
      const mockDetail = {
        id: 1,
        name: "test-repo",
        full_name: "user/test-repo",
        description: "Test repository",
        stargazers_count: 50,
        topics: ["javascript"],
        languageStats: { JavaScript: 1000 },
        latestCommit: { sha: "abc123" },
      };

      mockGetRepositoryDetail.mockResolvedValue(mockDetail as any);

      const result = await getRepositoryDetailAction("user", "test-repo");

      expect(mockGetRepositoryDetail).toHaveBeenCalledWith("user", "test-repo");
      expect(result.data).toBeDefined();
      expect(result.error).toBeUndefined();
    });

    test("オーナー名が空の場合はエラーを返す", async () => {
      const result = await getRepositoryDetailAction("", "test-repo");

      expect(result).toEqual({
        error: "オーナー名とリポジトリ名が必要です",
      });
      expect(mockGetRepositoryDetail).not.toHaveBeenCalled();
    });

    test("リポジトリ名が空の場合はエラーを返す", async () => {
      const result = await getRepositoryDetailAction("user", "");

      expect(result).toEqual({
        error: "オーナー名とリポジトリ名が必要です",
      });
      expect(mockGetRepositoryDetail).not.toHaveBeenCalled();
    });

    test("GitHub APIエラーの場合は適切なエラーメッセージを返す", async () => {
      const apiError = new githubApi.GitHubApiError(
        "Repository not found",
        404,
      );
      mockGetRepositoryDetail.mockRejectedValue(apiError);

      const result = await getRepositoryDetailAction("user", "non-existent");

      expect(result).toEqual({
        error: "Repository not found",
      });
    });

    test("予期しないエラーの場合は汎用エラーメッセージを返す", async () => {
      mockGetRepositoryDetail.mockRejectedValue(new Error("Network error"));

      const result = await getRepositoryDetailAction("user", "test-repo");

      expect(result).toEqual({
        error: "リポジトリの詳細取得中にエラーが発生しました",
      });
    });
  });
});
