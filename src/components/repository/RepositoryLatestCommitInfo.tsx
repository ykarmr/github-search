import Image from "next/image";

import { getRepositoryLatestCommitAction } from "@/actions/repository-actions";
import { formatDate } from "@/lib/utils";

interface RepositoryLatestCommitInfoProps {
  owner: string;
  name: string;
}

export async function RepositoryLatestCommitInfo({
  owner,
  name,
}: RepositoryLatestCommitInfoProps) {
  const result = await getRepositoryLatestCommitAction(owner, name);

  if (result.error || !result.data || result.data.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
          最新コミット
        </h2>
        <p className="text-gray-500 text-sm">
          最新コミット情報を取得できませんでした
        </p>
      </div>
    );
  }

  const commit = result.data[0];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
        最新コミット
      </h2>
      <div className="flex items-start gap-3 sm:gap-4">
        {commit.author && (
          <Image
            src={commit.author.avatar_url}
            alt={`${commit.author.login} avatar`}
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex-shrink-0"
            unoptimized
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base text-gray-900 mb-2 break-words">
            {commit.commit.message}
          </p>
          <div className="text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
            {commit.author && (
              <span className="font-medium truncate">
                {commit.author.login}
              </span>
            )}
            {commit.commit.author && !commit.author && (
              <span className="font-medium truncate">
                {commit.commit.author.name}
              </span>
            )}
            <span className="hidden sm:inline">{" • "}</span>
            <time className="truncate">
              {formatDate(commit.commit.author.date)}
            </time>
          </div>
          <div className="mt-2">
            <a
              href={commit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-xs sm:text-sm font-mono break-all"
            >
              {commit.sha.substring(0, 7)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
