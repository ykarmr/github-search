import { useState, useCallback, useRef } from "react";

import {
  searchRepositoriesAction,
  getRepositoryDetailAction,
} from "@/actions/repository-actions";
import { Repository, RepositoryDetail } from "@/types/repository";

interface UseRepositoriesState {
  repositories: Repository[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  totalCount: number;
  currentPage: number;
}

interface UseRepositoriesReturn extends UseRepositoriesState {
  searchRepositories: (query: string, resetResults?: boolean) => Promise<void>;
  loadMore: () => Promise<void>;
  clearResults: () => void;
  retrySearch: () => Promise<void>;
}

interface LastSearchParams {
  query: string;
  sort: "stars" | "forks" | "help-wanted-issues" | "updated";
  order: "desc" | "asc";
  perPage: number;
}

const ITEMS_PER_PAGE = 30;

export function useRepositories(): UseRepositoriesReturn {
  const [state, setState] = useState<UseRepositoriesState>({
    repositories: [],
    isLoading: false,
    error: null,
    hasMore: false,
    totalCount: 0,
    currentPage: 1,
  });

  const lastSearchParams = useRef<LastSearchParams | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const searchRepositories = useCallback(
    async (query: string, resetResults = true): Promise<void> => {
      if (!query.trim()) {
        setState((prev) => {
          return {
            ...prev,
            repositories: [],
            error: null,
            hasMore: false,
            totalCount: 0,
            currentPage: 1,
          };
        });
        return;
      }

      // 既存のリクエストをキャンセル
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      const currentPage = resetResults ? 1 : state.currentPage + 1;
      const searchParams: LastSearchParams = {
        query,
        sort: "stars",
        order: "desc",
        perPage: ITEMS_PER_PAGE,
      };

      lastSearchParams.current = searchParams;

      setState((prev) => {
        return {
          ...prev,
          isLoading: true,
          error: null,
          ...(resetResults && { repositories: [] }),
        };
      });

      try {
        const result = await searchRepositoriesAction(
          query,
          "stars",
          "desc",
          ITEMS_PER_PAGE,
          currentPage,
        );

        // リクエストがキャンセルされた場合は何もしない
        if (abortControllerRef.current?.signal.aborted) {
          return;
        }

        if (result.error) {
          setState((prev) => {
            return {
              ...prev,
              isLoading: false,
              error: result.error!,
            };
          });
          return;
        }

        if (result.data) {
          setState((prev) => {
            return {
              ...prev,
              repositories: resetResults
                ? result.data!.items
                : [...prev.repositories, ...result.data!.items],
              isLoading: false,
              hasMore:
                result.data!.items.length === ITEMS_PER_PAGE &&
                (resetResults ? 1 : prev.currentPage + 1) * ITEMS_PER_PAGE <
                  result.data!.total_count,
              totalCount: result.data!.total_count,
              currentPage: currentPage,
            };
          });
        }
      } catch (error) {
        // リクエストがキャンセルされた場合は何もしない
        if (abortControllerRef.current?.signal.aborted) {
          return;
        }

        const errorMessage =
          error instanceof Error
            ? error.message
            : "検索中にエラーが発生しました";

        setState((prev) => {
          return {
            ...prev,
            isLoading: false,
            error: errorMessage,
          };
        });
      }
    },
    [state.currentPage],
  );

  const loadMore = useCallback(async (): Promise<void> => {
    if (!lastSearchParams.current || state.isLoading || !state.hasMore) {
      return;
    }

    await searchRepositories(lastSearchParams.current.query, false);
  }, [searchRepositories, state.isLoading, state.hasMore]);

  const clearResults = useCallback(() => {
    // 進行中のリクエストをキャンセル
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setState({
      repositories: [],
      isLoading: false,
      error: null,
      hasMore: false,
      totalCount: 0,
      currentPage: 1,
    });

    lastSearchParams.current = null;
  }, []);

  const retrySearch = useCallback(async (): Promise<void> => {
    if (!lastSearchParams.current) {
      return;
    }

    await searchRepositories(lastSearchParams.current.query, true);
  }, [searchRepositories]);

  return {
    ...state,
    searchRepositories,
    loadMore,
    clearResults,
    retrySearch,
  };
}

// リポジトリ詳細を取得するカスタムフック
interface UseRepositoryDetailState {
  repository: RepositoryDetail | null;
  isLoading: boolean;
  error: string | null;
}

interface UseRepositoryDetailReturn extends UseRepositoryDetailState {
  fetchRepository: (owner: string, repo: string) => Promise<void>;
  clearRepository: () => void;
  retryFetch: () => Promise<void>;
}

export function useRepositoryDetail(): UseRepositoryDetailReturn {
  const [state, setState] = useState<UseRepositoryDetailState>({
    repository: null,
    isLoading: false,
    error: null,
  });

  const lastFetchParams = useRef<{ owner: string; repo: string } | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchRepository = useCallback(
    async (owner: string, repo: string): Promise<void> => {
      // 既存のリクエストをキャンセル
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();
      lastFetchParams.current = { owner, repo };

      setState((prev) => {
        return {
          ...prev,
          isLoading: true,
          error: null,
        };
      });

      try {
        const result = await getRepositoryDetailAction(owner, repo);

        // リクエストがキャンセルされた場合は何もしない
        if (abortControllerRef.current?.signal.aborted) {
          return;
        }

        if (result.error) {
          setState({
            repository: null,
            isLoading: false,
            error: result.error,
          });
          return;
        }

        if (result.data) {
          setState({
            repository: result.data,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        // リクエストがキャンセルされた場合は何もしない
        if (abortControllerRef.current?.signal.aborted) {
          return;
        }

        const errorMessage =
          error instanceof Error
            ? error.message
            : "リポジトリの詳細取得中にエラーが発生しました";

        setState({
          repository: null,
          isLoading: false,
          error: errorMessage,
        });
      }
    },
    [],
  );

  const clearRepository = useCallback(() => {
    // 進行中のリクエストをキャンセル
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setState({
      repository: null,
      isLoading: false,
      error: null,
    });

    lastFetchParams.current = null;
  }, []);

  const retryFetch = useCallback(async (): Promise<void> => {
    if (!lastFetchParams.current) {
      return;
    }

    const { owner, repo } = lastFetchParams.current;
    await fetchRepository(owner, repo);
  }, [fetchRepository]);

  return {
    ...state,
    fetchRepository,
    clearRepository,
    retryFetch,
  };
}
