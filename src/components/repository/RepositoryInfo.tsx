import Image from "next/image";
import { notFound } from "next/navigation";

import { getRepositoryInfoAction } from "@/actions/repository-actions";
import { formatNumber, formatDate } from "@/lib/utils";

interface RepositoryInfoProps {
  owner: string;
  name: string;
}

export async function RepositoryInfo({ owner, name }: RepositoryInfoProps) {
  const result = await getRepositoryInfoAction(owner, name);

  if (result.error || !result.data) {
    notFound();
  }

  const repository = result.data;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
        <Image
          src={repository.owner.avatar_url}
          alt={`${repository.owner.login} avatar`}
          width={64}
          height={64}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-gray-200 self-center sm:self-start"
          unoptimized
        />
        <div className="flex-1 text-center sm:text-left">
          <h1
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 break-words"
            data-testid="repository-name"
          >
            {repository.full_name}
          </h1>
          {repository.description && (
            <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
              {repository.description}
            </p>
          )}
        </div>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6"
        data-testid="repository-statistics"
      >
        <div
          className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg"
          data-testid="repository-stars"
        >
          <div className="text-lg sm:text-2xl font-bold text-gray-900">
            {formatNumber(repository.stargazers_count)}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Stars</div>
        </div>
        <div
          className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg"
          data-testid="repository-forks"
        >
          <div className="text-lg sm:text-2xl font-bold text-gray-900">
            {formatNumber(repository.forks_count)}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Forks</div>
        </div>
        <div
          className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg"
          data-testid="repository-watchers"
        >
          <div className="text-lg sm:text-2xl font-bold text-gray-900">
            {formatNumber(repository.watchers_count)}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Watchers</div>
        </div>
        <div
          className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg"
          data-testid="repository-issues"
        >
          <div className="text-lg sm:text-2xl font-bold text-gray-900">
            {formatNumber(repository.open_issues_count)}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Issues</div>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
        最終更新: {formatDate(repository.updated_at)}
      </div>
    </div>
  );
}
