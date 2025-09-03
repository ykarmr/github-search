"use server";

import {
  searchRepositories,
  getRepositoryDetail,
  validateSearchQuery,
  GitHubApiError,
} from "@/lib/github-api";
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

export async function searchRepositoriesAction(
  query: string,
  sort: "stars" | "forks" | "help-wanted-issues" | "updated" = "stars",
  order: "desc" | "asc" = "desc",
  perPage: number = 30,
  page: number = 1,
): Promise<SearchResult> {
  try {
    // バリデーション
    if (!validateSearchQuery(query)) {
      return {
        error: "有効な検索クエリを入力してください",
      };
    }

    // per_page の範囲チェック
    if (perPage < 1 || perPage > 100) {
      return {
        error: "per_pageは1から100の間で指定してください",
      };
    }

    // page の範囲チェック
    if (page < 1) {
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

    // eslint-disable-next-line no-console
    console.log("Search result:", {
      totalCount: result.total_count,
      itemsCount: result.items.length,
    });

    return {
      data: result,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Repository search error:", error);

    if (error instanceof GitHubApiError) {
      return {
        error: error.message,
      };
    }

    return {
      error: "リポジトリの検索中にエラーが発生しました",
    };
  }
}

export async function getRepositoryDetailAction(
  owner: string,
  repo: string,
): Promise<RepositoryDetailResult> {
  try {
    if (!owner || !repo) {
      return {
        error: "オーナー名とリポジトリ名が必要です",
      };
    }

    const result = await getRepositoryDetail(owner, repo);

    return {
      data: result,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Repository detail error:", error);

    if (error instanceof GitHubApiError) {
      return {
        error: error.message,
      };
    }

    return {
      error: "リポジトリの詳細取得中にエラーが発生しました",
    };
  }
}
