import { expect, test, describe } from "vitest";

import { validateSearchQuery, GitHubApiError } from "./github-api";

describe("GitHub API Utility Functions", () => {
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
});
