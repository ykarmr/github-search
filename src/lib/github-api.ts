import { Octokit } from "@octokit/rest";
import { cache } from "react";

import {
  Repository,
  SearchRepositoriesResponse,
  SearchParams,
  LanguageStats,
  LatestCommit,
  ApiError,
} from "@/types/repository";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

// API エラーハンドリング
class GitHubApiError extends Error implements ApiError {
  constructor(
    message: string,
    public status?: number,
    public code?: string,
  ) {
    super(message);
    this.name = "GitHubApiError";
  }
}

// リポジトリ検索
export const searchRepositories = cache(
  async (params: SearchParams): Promise<SearchRepositoriesResponse> => {
    try {
      const response = await octokit.rest.search.repos({
        q: params.q,
        sort: params.sort || "stars",
        order: params.order || "desc",
        // eslint-disable-next-line camelcase
        per_page: params.per_page || 30,
        page: params.page || 1,
      });

      // 型を適合させるため、必要に応じて変換
      const transformedData: SearchRepositoriesResponse = {
        // eslint-disable-next-line camelcase
        total_count: response.data.total_count,
        // eslint-disable-next-line camelcase
        incomplete_results: response.data.incomplete_results,
        items: response.data.items.map((item) => {
          return {
            ...item,
            topics: item.topics || [],
          };
        }) as Repository[],
      };

      return transformedData;
    } catch (error: any) {
      throw new GitHubApiError(
        error.message || "Repository search failed",
        error.status,
        error.documentation_url,
      );
    }
  },
);

// 単一リポジトリの詳細取得
export const getRepositoryInfo = cache(
  async (owner: string, repo: string): Promise<Repository> => {
    try {
      const response = await octokit.rest.repos.get({
        owner,
        repo,
      });

      // 型を適合させるため、必要に応じて変換
      const transformedData = {
        ...response.data,
        topics: response.data.topics || [],
      } as Repository;

      return transformedData;
    } catch (error: any) {
      throw new GitHubApiError(
        error.message || "Failed to get repository",
        error.status,
        error.documentation_url,
      );
    }
  },
);

// リポジトリの言語統計取得
export const getRepositoryLanguageStats = cache(
  async (owner: string, repo: string): Promise<LanguageStats> => {
    try {
      const response = await octokit.rest.repos.listLanguages({
        owner,
        repo,
      });

      return response.data;
    } catch (error: any) {
      throw new GitHubApiError(
        error.message || "Failed to get repository languages",
        error.status,
        error.documentation_url,
      );
    }
  },
);

// リポジトリの最新コミット取得
export const getRepositoryLatestCommit = cache(
  async (owner: string, repo: string): Promise<LatestCommit[]> => {
    try {
      const response = await octokit.rest.repos.listCommits({
        owner,
        repo,
        // eslint-disable-next-line camelcase
        per_page: 1,
      });

      return response.data as LatestCommit[];
    } catch (error: any) {
      throw new GitHubApiError(
        error.message || "Failed to get latest commit",
        error.status,
        error.documentation_url,
      );
    }
  },
);

// ユーティリティ関数: 検索クエリの検証
export function validateSearchQuery(query: string): boolean {
  if (!query || typeof query !== "string") {
    return false;
  }
  if (query.trim().length === 0) {
    return false;
  }
  if (query.length > 256) {
    return false;
  }
  return true;
}

export { GitHubApiError };
