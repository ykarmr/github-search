import Image from "next/image";

import LanguageChart from "@/components/LanguageChart";
import StatisticsDisplay from "@/components/StatisticsDisplay";
import BackButton from "@/components/ui/BackButton";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CopyButton from "@/components/ui/CopyButton";
import { formatDate, formatRelativeTime, cn } from "@/lib/utils";
import { RepositoryDetailProps } from "@/types/repository";

export function RepositoryDetail({ repository }: RepositoryDetailProps) {
  const breadcrumbItems = [
    { label: "ホーム", href: "/" },
    { label: repository.full_name },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* ナビゲーション */}
        <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
          <BackButton />
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* メインヘッダー */}
        <header className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            {/* アバター画像 */}
            <div className="flex-shrink-0 self-center sm:self-start">
              <Image
                src={repository.owner.avatar_url}
                alt={`${repository.owner.login} avatar`}
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-200"
                unoptimized
              />
            </div>

            {/* リポジトリ情報 */}
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h1
                data-testid="repository-name"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 break-words"
              >
                {repository.full_name}
              </h1>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
                <a
                  href={repository.owner.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm sm:text-base"
                >
                  {repository.owner.login}
                </a>
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                  {repository.owner.type}
                </span>
              </div>

              {repository.description && (
                <p
                  data-testid="repository-description"
                  className="text-gray-600 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed"
                >
                  {repository.description}
                </p>
              )}

              {/* アクションボタン */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="github-link"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm sm:text-base",
                    "hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    "transition-colors duration-200",
                  )}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHubで開く
                </a>

                {repository.clone_url && (
                  <CopyButton text={repository.clone_url}>
                    クローンURL をコピー
                  </CopyButton>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* 統計情報 */}
        <section className="mb-6 sm:mb-8">
          <div data-testid="repository-statistics">
            <StatisticsDisplay
              stats={{
                stars: repository.stargazers_count,
                watchers: repository.watchers_count,
                forks: repository.forks_count,
                issues: repository.open_issues_count,
              }}
            />
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {/* 言語構成 */}
          {repository.languageStats &&
            Object.keys(repository.languageStats).length > 0 && (
              <section>
                <LanguageChart languages={repository.languageStats} />
              </section>
            )}

          {/* その他の情報 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900  mb-4">
              詳細情報
            </h3>

            <div className="bg-white  rounded-lg border border-gray-200  p-6 space-y-4">
              {/* 最新コミット */}
              {repository.latestCommit && (
                <div>
                  <h4 className="font-medium text-gray-900  mb-2">
                    最新コミット
                  </h4>
                  <div className="flex items-start gap-3">
                    {repository.latestCommit.author && (
                      <Image
                        src={repository.latestCommit.author.avatar_url}
                        alt={repository.latestCommit.author.login}
                        width={24}
                        height={24}
                        className="rounded-full"
                        unoptimized
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 mb-1">
                        {repository.latestCommit.commit.message}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>
                          {repository.latestCommit.commit.author.name}
                        </span>
                        <span>•</span>
                        <span>
                          {formatRelativeTime(
                            repository.latestCommit.commit.author.date,
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 基本情報 */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <span className="text-sm text-gray-500">作成日：</span>
                  <span
                    data-testid="repository-created-at"
                    className="text-sm text-gray-900 ml-2"
                  >
                    {formatDate(repository.created_at)}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">更新日：</span>
                  <span
                    data-testid="repository-updated-at"
                    className="text-sm text-gray-900 ml-2"
                  >
                    {formatDate(repository.updated_at)}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">メイン言語：</span>
                  <span className="text-sm text-gray-900 ml-2">
                    {repository.language || "なし"}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    デフォルトブランチ：
                  </span>
                  <span className="text-sm text-gray-900 ml-2">
                    {repository.default_branch}
                  </span>
                </div>

                {/* ライセンス */}
                {repository.license && (
                  <div>
                    <span className="text-sm text-gray-500">ライセンス：</span>
                    <span className="text-sm text-gray-900 ml-2">
                      {repository.license.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* トピック */}
        {repository.topics && repository.topics.length > 0 && (
          <section className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              トピック
            </h3>
            <div className="flex flex-wrap gap-2">
              {repository.topics.map((topic) => {
                return (
                  <span
                    key={topic}
                    className={cn(
                      "px-3 py-1 text-sm rounded-full",
                      "bg-blue-100 text-blue-800",
                      "border border-blue-200",
                    )}
                  >
                    {topic}
                  </span>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default RepositoryDetail;
