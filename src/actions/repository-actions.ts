"use server";

import { unstable_cache } from "next/cache";

import {
  searchRepositories,
  getRepositoryInfo,
  getRepositoryLanguageStats,
  getRepositoryLatestCommit,
  validateSearchQuery,
  GitHubApiError,
} from "@/lib/github-api";
import { logger } from "@/lib/logger";
import {
  SearchParams,
  SearchRepositoriesResponse,
  Repository,
  LanguageStats,
  LatestCommit,
} from "@/types/repository";

interface SearchResult {
  data?: SearchRepositoriesResponse;
  error?: string;
}

interface RepositoryResult {
  data?: Repository;
  error?: string;
}

interface LanguageStatsResult {
  data?: LanguageStats;
  error?: string;
}

interface LatestCommitResult {
  data?: LatestCommit[];
  error?: string;
}

export const searchRepositoriesAction = unstable_cache(
  async (
    query: string,
    sort: "stars" | "forks" | "help-wanted-issues" | "updated" = "stars",
    order: "desc" | "asc" = "desc",
    perPage: number = 30,
    page: number = 1,
  ): Promise<SearchResult> => {
    try {
      logger.info(
        { query, sort, order, perPage, page },
        "Searching repositories: リクエストを受け付けました",
      );

      // バリデーション
      if (!validateSearchQuery(query)) {
        logger.warn({ query }, "Searching repositories: クエリが無効です");

        return {
          error: "有効な検索クエリを入力してください",
        };
      }

      // per_page の範囲チェック
      if (perPage < 1 || perPage > 100) {
        logger.warn(
          { perPage },
          "Searching repositories: per_pageの範囲が無効です",
        );

        return {
          error: "per_pageは1から100の間で指定してください",
        };
      }

      // page の範囲チェック
      if (page < 1) {
        logger.warn({ page }, "Searching repositories: pageの範囲が無効です");

        return {
          error: "pageは1以上で指定してください",
        };
      }

      const params: SearchParams = {
        q: query,
        sort,
        order,
        // eslint-disable-next-line camelcase
        per_page: perPage,
        page,
      };

      const result = await searchRepositories(params);

      logger.info(
        { query, sort, order, perPage, page },
        "Searching repositories: リクエストが成功しました",
      );

      return {
        data: result,
      };
    } catch (error) {
      logger.error(
        { error },
        "Searching repositories: リクエストが失敗しました",
      );

      if (error instanceof GitHubApiError) {
        return {
          error: error.message,
        };
      }

      return {
        error: "リポジトリの検索中にエラーが発生しました",
      };
    }
  },
  ["query", "sort", "order", "perPage", "page"],
  {
    revalidate: 600, // 10分ごとに再検証する
  },
);

// 個別のリポジトリ基本情報取得アクション
export const getRepositoryInfoAction = unstable_cache(
  async (owner: string, repo: string): Promise<RepositoryResult> => {
    try {
      logger.info(
        { owner, repo },
        "Getting repository info: リクエストを受け付けました",
      );

      if (!owner || !repo) {
        return {
          error: "オーナー名とリポジトリ名が必要です",
        };
      }

      const result = await getRepositoryInfo(owner, repo);

      logger.info(
        { owner, repo },
        "Getting repository info: リクエストが成功しました",
      );

      return {
        data: result,
      };
    } catch (error) {
      logger.error(
        { error },
        "Getting repository info: リクエストが失敗しました",
      );

      if (error instanceof GitHubApiError) {
        return {
          error: error.message,
        };
      }

      return {
        error: "リポジトリ情報の取得中にエラーが発生しました",
      };
    }
  },
  ["owner", "repo"],
  {
    revalidate: 600,
  },
);

// 個別の言語統計取得アクション
export const getRepositoryLanguageStatsAction = unstable_cache(
  async (owner: string, repo: string): Promise<LanguageStatsResult> => {
    try {
      logger.info(
        { owner, repo },
        "Getting repository language stats: リクエストを受け付けました",
      );

      if (!owner || !repo) {
        return {
          error: "オーナー名とリポジトリ名が必要です",
        };
      }

      const result = await getRepositoryLanguageStats(owner, repo);

      logger.info(
        { owner, repo },
        "Getting repository language stats: リクエストが成功しました",
      );

      return {
        data: result,
      };
    } catch (error) {
      logger.error(
        { error },
        "Getting repository language stats: リクエストが失敗しました",
      );

      if (error instanceof GitHubApiError) {
        return {
          error: error.message,
        };
      }

      return {
        error: "言語統計の取得中にエラーが発生しました",
      };
    }
  },
  ["owner", "repo"],
  {
    revalidate: 600,
  },
);

// 個別の最新コミット取得アクション
export const getRepositoryLatestCommitAction = unstable_cache(
  async (owner: string, repo: string): Promise<LatestCommitResult> => {
    try {
      logger.info(
        { owner, repo },
        "Getting repository latest commit: リクエストを受け付けました",
      );

      if (!owner || !repo) {
        return {
          error: "オーナー名とリポジトリ名が必要です",
        };
      }

      const result = await getRepositoryLatestCommit(owner, repo);

      logger.info(
        { owner, repo },
        "Getting repository latest commit: リクエストが成功しました",
      );

      return {
        data: result,
      };
    } catch (error) {
      logger.error(
        { error },
        "Getting repository latest commit: リクエストが失敗しました",
      );

      if (error instanceof GitHubApiError) {
        return {
          error: error.message,
        };
      }

      return {
        error: "最新コミットの取得中にエラーが発生しました",
      };
    }
  },
  ["owner", "repo"],
  {
    revalidate: 600,
  },
);
