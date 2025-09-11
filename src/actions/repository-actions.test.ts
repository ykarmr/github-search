import { http, HttpResponse } from "msw";
import { expect, test, describe, vi } from "vitest";

import {
  searchRepositoriesAction,
  getRepositoryInfoAction,
  getRepositoryLanguageStatsAction,
  getRepositoryLatestCommitAction,
} from "./repository-actions";

import { server } from "@/__tests__/mocks/server";

describe("searchRepositoriesAction", () => {
  test("正常な検索結果を返す", async () => {
    const result = await searchRepositoriesAction("react");

    expect(result.data).toBeDefined();
    expect(result.error).toBeUndefined();
    expect(result.data?.items).toHaveLength(2);
    expect(result.data?.items[0].name).toBe("react");
    expect(result.data?.items[0].full_name).toBe("facebook/react");
  });

  test("無効な検索クエリの場合はエラーを返す", async () => {
    const result = await searchRepositoriesAction("");

    expect(result).toEqual({
      error: "有効な検索クエリを入力してください",
    });
  });

  test("per_pageが範囲外の場合はエラーを返す", async () => {
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
    // MSWでエラーレスポンスをモック
    server.use(
      http.get("https://api.github.com/search/repositories", () => {
        return HttpResponse.json(
          {
            message: "API rate limit exceeded",
            // eslint-disable-next-line camelcase
            documentation_url:
              "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting",
          },
          { status: 403 },
        );
      }),
    );

    const result = await searchRepositoriesAction("react");

    expect(result.error).toContain("API rate limit exceeded");
  });

  test("予期しないエラーの場合は適切なエラーメッセージを返す", async () => {
    // MSWでネットワークエラーをモック
    server.use(
      http.get("https://api.github.com/search/repositories", () => {
        return HttpResponse.error();
      }),
    );

    const result = await searchRepositoriesAction("react");

    // HttpResponse.error()の場合、Octokitが"Failed to fetch"エラーをthrowし、
    // それがGitHubApiErrorに包まれてerror.messageが返される
    expect(result.error).toBe("Failed to fetch");
  });

  test("検索結果が存在しない場合", async () => {
    const result = await searchRepositoriesAction("nonexistent");

    expect(result.data).toBeDefined();
    expect(result.error).toBeUndefined();
    expect(result.data?.items).toHaveLength(0);
    expect(result.data?.total_count).toBe(0);
  });
});

describe("getRepositoryInfoAction", () => {
  test("正常なリポジトリ基本情報を返す", async () => {
    const result = await getRepositoryInfoAction("facebook", "react");

    expect(result.data).toBeDefined();
    expect(result.error).toBeUndefined();
    expect(result.data?.name).toBe("react");
    expect(result.data?.full_name).toBe("facebook/react");
  });

  test("オーナー名が空の場合はエラーを返す", async () => {
    const result = await getRepositoryInfoAction("", "test-repo");

    expect(result).toEqual({
      error: "オーナー名とリポジトリ名が必要です",
    });
  });

  test("GitHub APIエラーの場合は適切なエラーメッセージを返す", async () => {
    server.use(
      http.get("https://api.github.com/repos/user/non-existent", () => {
        return HttpResponse.json({ message: "Not Found" }, { status: 404 });
      }),
    );

    const result = await getRepositoryInfoAction("user", "non-existent");
    expect(result.error).toContain("Not Found");
  });
});

describe("getRepositoryLanguageStatsAction", () => {
  test("正常な言語統計を返す", async () => {
    const result = await getRepositoryLanguageStatsAction("facebook", "react");

    expect(result.data).toBeDefined();
    expect(result.error).toBeUndefined();
    expect(typeof result.data).toBe("object");
  });

  test("オーナー名が空の場合はエラーを返す", async () => {
    const result = await getRepositoryLanguageStatsAction("", "test-repo");

    expect(result).toEqual({
      error: "オーナー名とリポジトリ名が必要です",
    });
  });

  test("GitHub APIエラーの場合は適切なエラーメッセージを返す", async () => {
    server.use(
      http.get(
        "https://api.github.com/repos/user/non-existent/languages",
        () => {
          return HttpResponse.json({ message: "Not Found" }, { status: 404 });
        },
      ),
    );

    const result = await getRepositoryLanguageStatsAction(
      "user",
      "non-existent",
    );
    expect(result.error).toContain("Not Found");
  });
});

describe("getRepositoryLatestCommitAction", () => {
  test("正常な最新コミット情報を返す", async () => {
    const result = await getRepositoryLatestCommitAction("facebook", "react");

    expect(result.data).toBeDefined();
    expect(result.error).toBeUndefined();
    expect(Array.isArray(result.data)).toBe(true);
    if (result.data && result.data.length > 0) {
      expect(result.data[0]).toHaveProperty("sha");
      expect(result.data[0]).toHaveProperty("commit");
    }
  });

  test("オーナー名が空の場合はエラーを返す", async () => {
    const result = await getRepositoryLatestCommitAction("", "test-repo");

    expect(result).toEqual({
      error: "オーナー名とリポジトリ名が必要です",
    });
  });

  test("GitHub APIエラーの場合は適切なエラーメッセージを返す", async () => {
    server.use(
      http.get("https://api.github.com/repos/user/non-existent/commits", () => {
        return HttpResponse.json({ message: "Not Found" }, { status: 404 });
      }),
    );

    const result = await getRepositoryLatestCommitAction(
      "user",
      "non-existent",
    );
    expect(result.error).toContain("Not Found");
  });
});
