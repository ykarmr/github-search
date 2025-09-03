import { Suspense } from "react";

import { searchRepositoriesAction } from "@/actions/repository-actions";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import RepositoryList from "@/components/RepositoryList";
import SearchBar from "@/components/SearchBar";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

// サーバーコンポーネントでの検索結果取得
async function SearchResults({
  query,
  page,
}: {
  query?: string;
  page: number;
}) {
  if (!query?.trim()) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="text-gray-400 dark:text-gray-500 text-4xl sm:text-6xl mb-3 sm:mb-4">
          🔍
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
          リポジトリを検索してください
        </h2>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 max-w-md mx-auto">
          上の検索バーにキーワードを入力して、GitHubリポジトリを検索できます
        </p>
      </div>
    );
  }

  try {
    const result = await searchRepositoriesAction(
      query,
      "stars",
      "desc",
      30,
      page,
    );

    if (result.error) {
      return (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4 sm:mb-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-xs sm:text-sm text-red-800 dark:text-red-200">
                {result.error}
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (!result.data || result.data.items.length === 0) {
      return (
        <div className="text-center py-8 sm:py-12">
          <div className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
            「{query}」に一致するリポジトリが見つかりませんでした
          </div>
          <p className="text-gray-400 dark:text-gray-500 mt-2 text-sm sm:text-base">
            別のキーワードで検索してみてください
          </p>
        </div>
      );
    }

    const { items, total_count: totalCount } = result.data;
    const hasMore = page * 30 < totalCount;

    return (
      <RepositoryList
        repositories={items}
        hasMore={hasMore}
        currentPage={page}
        query={query}
      />
    );
  } catch {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4 sm:mb-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-xs sm:text-sm text-red-800 dark:text-red-200">
              検索中にエラーが発生しました
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default async function Home({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q;
  const page = Math.max(1, parseInt(params.page || "1", 10));

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* 検索バー */}
          <div className="mb-6 sm:mb-8">
            <SearchBar defaultValue={query} />
          </div>

          {/* 検索結果表示 */}
          <main>
            <Suspense
              key={JSON.stringify(params)}
              fallback={
                <div className="flex justify-center py-6 sm:py-8">
                  <LoadingSpinner size="lg" text="検索中..." />
                </div>
              }
            >
              <SearchResults query={query} page={page} />
            </Suspense>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
}
