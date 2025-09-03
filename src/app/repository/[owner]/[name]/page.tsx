import { Metadata } from "next";
import { Suspense } from "react";

import {
  RepositoryDetailContent,
  RepositoryErrorFallback,
} from "@/components/repository";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { generateRepositoryMetadata } from "@/lib/metadata";

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
  const { owner, name } = await params;
  return generateRepositoryMetadata({ owner, name });
}

// 詳細ページコンポーネント
export default async function RepositoryDetailPage({ params }: PageProps) {
  const { owner, name } = await params;

  return (
    <ErrorBoundary
      fallback={
        <RepositoryErrorFallback
          error={new Error("リポジトリの詳細情報を取得できませんでした")}
          resetErrorBoundary={() => {
            return window.location.reload();
          }}
        />
      }
    >
      <Suspense
        fallback={
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <LoadingSpinner size="lg" text="リポジトリ情報を読み込み中..." />
          </div>
        }
      >
        <RepositoryDetailContent owner={owner} name={name} />
      </Suspense>
    </ErrorBoundary>
  );
}
