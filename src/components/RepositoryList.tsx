import Link from "next/link";

import RepositoryCard from "./RepositoryCard";

import { cn } from "@/lib/utils";
import { Repository } from "@/types/repository";

interface RepositoryListProps {
  repositories: Repository[];
  hasMore?: boolean;
  currentPage?: number;
  query?: string;
}

export function RepositoryList({
  repositories,
  hasMore,
  currentPage = 1,
  query,
}: RepositoryListProps) {
  if (repositories.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
          リポジトリが見つかりませんでした
        </div>
        <p className="text-gray-400 dark:text-gray-500 mt-2 text-sm sm:text-base">
          別のキーワードで検索してみてください
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* リポジトリカードのリスト */}
      <div className="space-y-3 sm:space-y-4">
        {repositories.map((repository) => {
          return <RepositoryCard key={repository.id} repository={repository} />;
        })}
      </div>

      {/* ページネーション */}
      {query && (
        <div className="flex justify-center items-center gap-4 py-6 sm:py-8">
          {/* 前のページボタン */}
          {currentPage > 1 && (
            <Link
              href={`/?q=${encodeURIComponent(query)}&page=${currentPage - 1}`}
              className={cn(
                "px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600",
                "text-gray-700 dark:text-gray-300 rounded-lg",
                "hover:bg-gray-50 dark:hover:bg-gray-700",
                "focus:ring-2 focus:ring-blue-500 focus:outline-none",
                "transition-colors duration-200",
                "text-sm sm:text-base",
              )}
            >
              前のページ
            </Link>
          )}

          {/* 現在のページ情報 */}
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            ページ {currentPage}
          </span>

          {/* 次のページボタン */}
          {hasMore && (
            <Link
              href={`/?q=${encodeURIComponent(query)}&page=${currentPage + 1}`}
              className={cn(
                "px-4 py-2 bg-blue-600 text-white rounded-lg",
                "hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none",
                "transition-colors duration-200",
                "text-sm sm:text-base",
              )}
            >
              次のページ
            </Link>
          )}
        </div>
      )}

      {/* すべて表示済みのメッセージ */}
      {!hasMore && query && (
        <div className="text-center py-6 sm:py-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            すべてのリポジトリを表示しました
          </p>
        </div>
      )}
    </div>
  );
}

export default RepositoryList;
