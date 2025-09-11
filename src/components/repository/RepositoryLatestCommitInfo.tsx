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
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          最新コミット
        </h2>
        <p className="text-gray-500">最新コミット情報を取得できませんでした</p>
      </div>
    );
  }

  const commit = result.data[0];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">最新コミット</h2>
      <div className="flex items-start gap-4">
        {commit.author && (
          <Image
            src={commit.author.avatar_url}
            alt={`${commit.author.login} avatar`}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border border-gray-200"
            unoptimized
          />
        )}
        <div className="flex-1">
          <p className="text-gray-900 mb-2">{commit.commit.message}</p>
          <div className="text-sm text-gray-500">
            {commit.author && (
              <span className="font-medium">{commit.author.login}</span>
            )}
            {commit.commit.author && !commit.author && (
              <span className="font-medium">{commit.commit.author.name}</span>
            )}
            {" • "}
            <time>{formatDate(commit.commit.author.date)}</time>
          </div>
          <div className="mt-2">
            <a
              href={commit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-mono"
            >
              {commit.sha.substring(0, 7)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
