import Image from "next/image";
import Link from "next/link";

import { formatNumber, formatDate, getLanguageColor } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { RepositoryCardProps } from "@/types/repository";

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const languageColor = repository.language
    ? getLanguageColor(repository.language)
    : "#858585";

  return (
    <div
      data-testid={`repository-card-${repository.id}`}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",
        "p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200",
        "flex flex-col gap-4",
      )}
    >
      {/* ヘッダー部分: アバターとタイトル */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src={repository.owner.avatar_url}
            alt={`${repository.owner.login} avatar`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700"
            unoptimized
          />
        </div>
        <div className="flex-1 min-w-0">
          <Link
            href={`/repository/${repository.owner.login}/${repository.name}`}
            className={cn(
              "text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400",
              "hover:text-blue-800 dark:hover:text-blue-300",
              "hover:underline transition-colors duration-200",
              "block break-words line-clamp-2",
            )}
          >
            {repository.full_name}
          </Link>
        </div>
      </div>

      {/* 説明 */}
      {repository.description && (
        <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {repository.description}
        </p>
      )}

      {/* 統計情報とメタデータ */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        {/* 言語 */}
        {repository.language && (
          <div className="flex items-center gap-1">
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
              style={{ backgroundColor: languageColor }}
              aria-label={`${repository.language} language indicator`}
            />
            <span>{repository.language}</span>
          </div>
        )}

        {/* スター数 */}
        <div className="flex items-center gap-1">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{formatNumber(repository.stargazers_count)}</span>
        </div>

        {/* フォーク数 */}
        <div className="flex items-center gap-1">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{formatNumber(repository.forks_count)}</span>
        </div>

        {/* ウォッチャー数 */}
        <div className="flex items-center gap-1">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{formatNumber(repository.watchers_count)}</span>
        </div>

        {/* イシュー数 */}
        <div className="flex items-center gap-1">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>{formatNumber(repository.open_issues_count)}</span>
        </div>

        {/* 更新日 */}
        <div className="hidden sm:flex items-center gap-1">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span>{formatDate(repository.updated_at)}</span>
        </div>
      </div>

      {/* トピック（もしあれば） */}
      {repository.topics && repository.topics.length > 0 && (
        <div className="mt-3">
          <div className="flex flex-wrap gap-1">
            {repository.topics.slice(0, 5).map((topic) => {
              return (
                <span
                  key={topic}
                  className={cn(
                    "px-2 py-1 text-xs rounded-full",
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                  )}
                >
                  {topic}
                </span>
              );
            })}
            {repository.topics.length > 5 && (
              <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                +{repository.topics.length - 5} more
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RepositoryCard;
