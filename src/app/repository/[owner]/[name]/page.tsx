import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRepositoryDetailAction } from "@/actions/repository-actions";
import ErrorBoundary from "@/components/ErrorBoundary";
import RepositoryDetail from "@/components/RepositoryDetail";

interface PageProps {
  params: Promise<{
    owner: string;
    name: string;
  }>;
}

// メタデータを生成
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const { owner, name } = await params;
    const result = await getRepositoryDetailAction(owner, name);

    if (result.error || !result.data) {
      return {
        title: "リポジトリが見つかりません - GitHub リポジトリ検索",
        description: "指定されたリポジトリが見つかりませんでした。",
      };
    }

    const repository = result.data;

    return {
      title: `${repository.full_name} - GitHub リポジトリ検索`,
      description:
        repository.description || `${repository.full_name}の詳細情報`,
      openGraph: {
        title: repository.full_name,
        description:
          repository.description || `${repository.full_name}の詳細情報`,
        images: [
          {
            url: repository.owner.avatar_url,
            width: 400,
            height: 400,
            alt: `${repository.owner.login} avatar`,
          },
        ],
      },
    };
  } catch {
    return {
      title: "リポジトリが見つかりません - GitHub リポジトリ検索",
      description: "指定されたリポジトリが見つかりませんでした。",
    };
  }
}

// 詳細ページコンポーネント
export default async function RepositoryDetailPage({ params }: PageProps) {
  try {
    const { owner, name } = await params;

    // パラメータの検証
    if (!owner || !name) {
      notFound();
    }

    const result = await getRepositoryDetailAction(owner, name);

    if (result.error || !result.data) {
      // 404エラーの場合
      if (result.error?.includes("404")) {
        notFound();
      }

      // その他のエラー
      throw new Error(result.error || "リポジトリの取得に失敗しました");
    }

    return (
      <ErrorBoundary>
        <RepositoryDetail repository={result.data} />
      </ErrorBoundary>
    );
  } catch (error) {
    // 404エラーの場合
    if (error instanceof Error && error.message.includes("404")) {
      notFound();
    }

    // その他のエラー
    return (
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              エラーが発生しました
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              リポジトリの詳細情報を取得できませんでした。
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              ホームに戻る
            </a>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

// ローディングコンポーネント（未使用なので削除）
