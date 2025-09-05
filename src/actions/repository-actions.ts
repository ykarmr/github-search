"use server";

import { cache } from "react";

import {
  searchRepositories,
  getRepositoryDetail,
  validateSearchQuery,
  GitHubApiError,
} from "@/lib/github-api";
import { logger } from "@/lib/logger";
import {
  SearchParams,
  SearchRepositoriesResponse,
  RepositoryDetail,
} from "@/types/repository";

interface SearchResult {
  data?: SearchRepositoriesResponse;
  error?: string;
}

interface RepositoryDetailResult {
  data?: RepositoryDetail;
  error?: string;
}

export const searchRepositoriesAction = cache(
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
        { query, sort, order, perPage, page, result },
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
);

export const getRepositoryDetailAction = cache(
  async (owner: string, repo: string): Promise<RepositoryDetailResult> => {
    try {
      logger.info(
        { owner, repo },
        "Getting repository detail: リクエストを受け付けました",
      );

      if (!owner || !repo) {
        return {
          error: "オーナー名とリポジトリ名が必要です",
        };
      }

      const result = await getRepositoryDetail(owner, repo);

      logger.info(
        { owner, repo, result },
        "Getting repository detail: リクエストが成功しました",
      );

      return {
        data: result,
      };
    } catch (error) {
      logger.error(
        { error },
        "Getting repository detail: リクエストが失敗しました",
      );

      if (error instanceof GitHubApiError) {
        return {
          error: error.message,
        };
      }

      return {
        error: "リポジトリの詳細取得中にエラーが発生しました",
      };
    }
  },
);
