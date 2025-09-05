import { Suspense } from "react";

import SearchBar from "@/components/search/SearchBar";
import SearchErrorFallback from "@/components/search/SearchErrorFallback";
import SearchResults from "@/components/search/SearchResults";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { loggerWrapper } from "@/lib/loggerWrapper";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

export default async function Home({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q ?? "";

  return await loggerWrapper(
    `/?q=${encodeURIComponent(query.trim())}`,
    async () => {
      const page = Math.max(1, parseInt(params.page || "1", 10));

      return (
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {/* 検索バー */}
            <div className="mb-6 sm:mb-8">
              <SearchBar defaultValue={query} />
            </div>

            {/* 検索結果表示 */}
            <div>
              <ErrorBoundary
                fallback={
                  <SearchErrorFallback
                    error={new Error("検索中にエラーが発生しました")}
                  />
                }
              >
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
              </ErrorBoundary>
            </div>
          </div>
        </div>
      );
    },
  );
}
