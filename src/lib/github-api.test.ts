import { expect, test, describe } from "vitest";

import {
  validateSearchQuery,
  GitHubApiError,
  searchRepositories,
  getRepositoryInfo,
  getRepositoryLanguageStats,
  getRepositoryLatestCommit,
} from "./github-api";

describe("validateSearchQuery", () => {
  test("有効なクエリの場合はtrueを返す", () => {
    expect(validateSearchQuery("react")).toBe(true);
    expect(validateSearchQuery("javascript vue")).toBe(true);
    expect(validateSearchQuery("a")).toBe(true);
  });

  test("無効なクエリの場合はfalseを返す", () => {
    expect(validateSearchQuery("")).toBe(false);
    expect(validateSearchQuery("   ")).toBe(false);
    expect(validateSearchQuery(null as any)).toBe(false);
    expect(validateSearchQuery(undefined as any)).toBe(false);
    expect(validateSearchQuery(123 as any)).toBe(false);
  });

  test("長すぎるクエリの場合はfalseを返す", () => {
    const longQuery = "a".repeat(257);
    expect(validateSearchQuery(longQuery)).toBe(false);
  });

  test("256文字のクエリは有効", () => {
    const maxQuery = "a".repeat(256);
    expect(validateSearchQuery(maxQuery)).toBe(true);
  });
});

describe("GitHubApiError", () => {
  test("エラーメッセージとステータスコードを正しく設定する", () => {
    const error = new GitHubApiError("Test error", 400, "test-code");

    expect(error.message).toBe("Test error");
    expect(error.status).toBe(400);
    expect(error.code).toBe("test-code");
    expect(error.name).toBe("GitHubApiError");
  });

  test("ステータスコードとコードはオプション", () => {
    const error = new GitHubApiError("Test error");

    expect(error.message).toBe("Test error");
    expect(error.status).toBeUndefined();
    expect(error.code).toBeUndefined();
  });
});

describe("searchRepositories", () => {
  test("検索に成功すると正しいリポジトリが返される", async () => {
    const result = await searchRepositories({ q: "react" });

    expect(result.total_count).toBe(2);
    expect(result.incomplete_results).toBe(false);
    expect(result.items).toHaveLength(2);

    const reactRepo = result.items[0];
    expect(reactRepo.name).toBe("react");
    expect(reactRepo.full_name).toBe("facebook/react");
    expect(reactRepo.owner.login).toBe("facebook");
    expect(reactRepo.topics).toEqual([
      "declarative",
      "frontend",
      "javascript",
      "library",
      "react",
      "ui",
    ]);
  });

  test("存在しないリポジトリで検索すると空の結果が返される", async () => {
    const result = await searchRepositories({ q: "nonexistent" });

    expect(result.total_count).toBe(0);
    expect(result.items).toHaveLength(0);
  });

  test("エラーが発生した場合GitHubApiErrorがthrowされる", async () => {
    await expect(searchRepositories({ q: "error" })).rejects.toThrow(
      GitHubApiError,
    );

    try {
      await searchRepositories({ q: "error" });
    } catch (error) {
      expect(error).toBeInstanceOf(GitHubApiError);
      expect((error as GitHubApiError).message).toContain(
        "API rate limit exceeded",
      );
      expect((error as GitHubApiError).status).toBe(403);
    }
  });

  test("検索パラメータが正しく適用される", async () => {
    const result = await searchRepositories({
      q: "react",
      sort: "stars",
      order: "asc",
      per_page: 10, // eslint-disable-line camelcase
      page: 2,
    });

    // MSWモックでは実際のパラメータは確認しませんが、
    // エラーなく実行されることを確認
    expect(result).toBeDefined();
    expect(result.items).toHaveLength(2);
  });
});

describe("getRepositoryInfo", () => {
  test("正常処理の場合、詳細情報を取得できる", async () => {
    const repo = await getRepositoryInfo("facebook", "react");

    expect(repo.name).toBe("react");
    expect(repo.full_name).toBe("facebook/react");
    expect(repo.owner.login).toBe("facebook");
    expect(repo.description).toBe(
      "The library for web and native user interfaces.",
    );
    expect(repo.topics).toEqual([
      "declarative",
      "frontend",
      "javascript",
      "library",
      "react",
      "ui",
    ]);
  });

  test("存在しないリポジトリの場合GitHubApiErrorがthrowされる", async () => {
    await expect(getRepositoryInfo("invalid", "repo")).rejects.toThrow(
      GitHubApiError,
    );

    try {
      await getRepositoryInfo("invalid", "repo");
    } catch (error) {
      expect(error).toBeInstanceOf(GitHubApiError);
      expect((error as GitHubApiError).status).toBe(404);
    }
  });
});

describe("getRepositoryLanguageStats", () => {
  test("正常処理場合、言語統計を取得できる", async () => {
    const languages = await getRepositoryLanguageStats("facebook", "react");

    expect(languages).toEqual({
      JavaScript: 5171280,
      TypeScript: 2230082,
      HTML: 115354,
      CSS: 81054,
      "C++": 44290,
      CoffeeScript: 18760,
      C: 5227,
      Shell: 4401,
      Python: 259,
      Makefile: 189,
    });
  });

  test("存在しないリポジトリの場合は空のオブジェクトが返される", async () => {
    const languages = await getRepositoryLanguageStats("invalid", "repo");

    expect(languages).toEqual({});
  });
});

describe("getRepositoryLatestCommit", () => {
  test("正常処理の場合、最新コミットを取得できる", async () => {
    const commits = await getRepositoryLatestCommit("facebook", "react");

    expect(commits.length).toBeGreaterThan(0);

    const latestCommit = commits[0];
    expect(latestCommit.sha).toBe("ac3e705a18696168acfcaed39dce0cfaa6be8836");
    expect(latestCommit.commit.author?.name).toBe("Eugene Choi");
    expect(latestCommit.author?.login).toBe("EugeneChoi4");
    expect(latestCommit.commit.message).toContain(
      "[compiler][playground] (2/N) Config override panel",
    );
  });

  test("存在しないリポジトリの場合は空の配列が返される", async () => {
    const commits = await getRepositoryLatestCommit("invalid", "repo");

    expect(commits).toEqual([]);
  });
});

describe("エラーハンドリングの詳細テスト", () => {
  test("言語統計の取得でエラーが発生した場合GitHubApiErrorがthrowされる", async () => {
    // test-user/language-errorはhandlersで500エラーを返すように設定済み
    await expect(
      getRepositoryLanguageStats("test-user", "language-error"),
    ).rejects.toThrow(GitHubApiError);

    try {
      await getRepositoryLanguageStats("test-user", "language-error");
    } catch (error) {
      expect(error).toBeInstanceOf(GitHubApiError);
      expect((error as GitHubApiError).status).toBe(500);
    }
  });

  test("最新コミット情報の取得でエラーが発生した場合GitHubApiErrorがthrowされる", async () => {
    // test-user/commit-errorはhandlersで500エラーを返すように設定済み
    await expect(
      getRepositoryLatestCommit("test-user", "commit-error"),
    ).rejects.toThrow(GitHubApiError);

    try {
      await getRepositoryLatestCommit("test-user", "commit-error");
    } catch (error) {
      expect(error).toBeInstanceOf(GitHubApiError);
      expect((error as GitHubApiError).status).toBe(500);
    }
  });

  test("リポジトリ検索で空の結果が正しくハンドリングされる", async () => {
    const result = await searchRepositories({ q: "nonexistent" });

    expect(result.total_count).toBe(0);
    expect(result.incomplete_results).toBe(false);
    expect(result.items).toEqual([]);
    expect(Array.isArray(result.items)).toBe(true);
  });
});
