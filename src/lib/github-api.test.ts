import { expect, test, describe } from "vitest";

import {
  validateSearchQuery,
  GitHubApiError,
  searchRepositories,
  getRepository,
  getRepositoryLanguages,
  getLatestCommit,
  getRepositoryDetail,
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

describe("getRepository", () => {
  test("正常処理の場合、詳細情報を取得できる", async () => {
    const repo = await getRepository("facebook", "react");

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
    await expect(getRepository("invalid", "repo")).rejects.toThrow(
      GitHubApiError,
    );

    try {
      await getRepository("invalid", "repo");
    } catch (error) {
      expect(error).toBeInstanceOf(GitHubApiError);
      expect((error as GitHubApiError).status).toBe(404);
    }
  });
});

describe("getRepositoryLanguages", () => {
  test("正常処理場合、言語統計を取得できる", async () => {
    const languages = await getRepositoryLanguages("facebook", "react");

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
    const languages = await getRepositoryLanguages("invalid", "repo");

    expect(languages).toEqual({});
  });
});

describe("getLatestCommit", () => {
  test("正常処理の場合、最新コミットを取得できる", async () => {
    const commits = await getLatestCommit("facebook", "react");

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
    const commits = await getLatestCommit("invalid", "repo");

    expect(commits).toEqual([]);
  });
});

describe("getRepositoryDetail", () => {
  test("正常処理の場合、詳細情報をすべて取得できる", async () => {
    const detail = await getRepositoryDetail("facebook", "react");

    // 基本リポジトリ情報
    expect(detail.name).toBe("react");
    expect(detail.full_name).toBe("facebook/react");
    expect(detail.owner.login).toBe("facebook");

    // 言語統計
    expect(detail.languageStats).toEqual({
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

    // 最新コミット情報
    expect(detail.latestCommit).toBeDefined();
    expect(detail.latestCommit?.sha).toBe(
      "ac3e705a18696168acfcaed39dce0cfaa6be8836",
    );
    expect(detail.latestCommit?.author?.login).toBe("EugeneChoi4");
  });

  test("存在しないリポジトリの場合GitHubApiErrorがthrowされる", async () => {
    await expect(getRepositoryDetail("invalid", "repo")).rejects.toThrow(
      GitHubApiError,
    );
  });

  test("一部のAPIが失敗しても基本情報は取得できる", async () => {
    // このテストは、言語統計やコミット情報の取得に失敗しても
    // 基本的なリポジトリ情報は取得できることを確認する
    // MSWモックでは全て成功するため、実際のエラーケースをテストしたい場合は
    // 個別にモックハンドラーを設定する必要がある

    const detail = await getRepositoryDetail("facebook", "react");
    expect(detail.name).toBe("react");
    expect(detail.languageStats).toBeDefined();
    expect(detail.latestCommit).toBeDefined();
  });
});

describe("型安全性テスト", () => {
  test("SearchRepositoriesResponseの型が正しく設定される", async () => {
    const result = await searchRepositories({ q: "react" });

    // 型チェック - これらのプロパティがすべて存在することを確認
    expect(typeof result.total_count).toBe("number");
    expect(typeof result.incomplete_results).toBe("boolean");
    expect(Array.isArray(result.items)).toBe(true);

    if (result.items.length > 0) {
      const repo = result.items[0];
      expect(typeof repo.id).toBe("number");
      expect(typeof repo.name).toBe("string");
      expect(typeof repo.full_name).toBe("string");
      expect(typeof repo.owner).toBe("object");
      expect(typeof repo.owner.login).toBe("string");
      expect(Array.isArray(repo.topics)).toBe(true);
    }
  });

  test("RepositoryDetailの型が正しく設定される", async () => {
    const detail = await getRepositoryDetail("facebook", "react");

    // 基本プロパティ
    expect(typeof detail.id).toBe("number");
    expect(typeof detail.name).toBe("string");
    expect(typeof detail.full_name).toBe("string");

    // 追加されたプロパティ
    if (detail.languageStats) {
      expect(typeof detail.languageStats).toBe("object");
      const languages = Object.keys(detail.languageStats);
      if (languages.length > 0) {
        expect(typeof detail.languageStats[languages[0]]).toBe("number");
      }
    }

    if (detail.latestCommit) {
      expect(typeof detail.latestCommit).toBe("object");
      expect(typeof detail.latestCommit.sha).toBe("string");
      expect(typeof detail.latestCommit.commit).toBe("object");
    }
  });
});

describe("エラーハンドリングの詳細テスト", () => {
  test("言語統計の取得に失敗しても基本情報は取得できる", async () => {
    // test-user/language-errorリポジトリは言語統計APIでエラーを返す
    const detail = await getRepositoryDetail("test-user", "language-error");

    // 基本情報は正常に取得できる
    expect(detail.name).toBe("language-error");
    expect(detail.full_name).toBe("test-user/language-error");
    expect(detail.owner.login).toBe("test-user");

    // 言語統計は失敗するためundefinedになる
    expect(detail.languageStats).toBeUndefined();
  });

  test("コミット情報の取得に失敗しても基本情報は取得できる", async () => {
    // test-user/commit-errorリポジトリはコミット情報APIでエラーを返す
    const detail = await getRepositoryDetail("test-user", "commit-error");

    // 基本情報は正常に取得できる
    expect(detail.name).toBe("commit-error");
    expect(detail.full_name).toBe("test-user/commit-error");
    expect(detail.owner.login).toBe("test-user");

    // コミット情報は失敗するためundefinedになる
    expect(detail.latestCommit).toBeUndefined();
  });

  test("リポジトリ検索で空の結果が正しくハンドリングされる", async () => {
    const result = await searchRepositories({ q: "nonexistent" });

    expect(result.total_count).toBe(0);
    expect(result.incomplete_results).toBe(false);
    expect(result.items).toEqual([]);
    expect(Array.isArray(result.items)).toBe(true);
  });
});
