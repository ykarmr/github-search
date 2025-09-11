import { Suspense } from "react";

import { RepositoryInfo } from "./RepositoryInfo";
import { RepositoryLanguageChart } from "./RepositoryLanguageChart";
import { RepositoryLatestCommitInfo } from "./RepositoryLatestCommitInfo";

import {
  ErrorBoundary,
  LoadingFallback,
  SectionErrorFallback,
} from "@/components/ui";

interface RepositoryDetailSectionsProps {
  owner: string;
  name: string;
}

export function RepositoryDetailSections({
  owner,
  name,
}: RepositoryDetailSectionsProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* 基本情報 */}
      <ErrorBoundary
        fallback={
          <SectionErrorFallback
            message="リポジトリ情報の読み込みに失敗しました"
            type="error"
          />
        }
      >
        <Suspense
          fallback={
            <LoadingFallback
              text="リポジトリ情報を読み込み中..."
              size="lg"
              className="flex justify-center py-6 sm:py-8"
            />
          }
        >
          <RepositoryInfo owner={owner} name={name} />
        </Suspense>
      </ErrorBoundary>

      {/* 言語統計 */}
      <ErrorBoundary
        fallback={
          <SectionErrorFallback
            message="言語統計の読み込みに失敗しました"
            type="warning"
          />
        }
      >
        <Suspense
          fallback={
            <LoadingFallback text="言語統計を読み込み中..." size="md" />
          }
        >
          <RepositoryLanguageChart owner={owner} name={name} />
        </Suspense>
      </ErrorBoundary>

      {/* 最新コミット情報 */}
      <ErrorBoundary
        fallback={
          <SectionErrorFallback
            message="最新コミット情報の読み込みに失敗しました"
            type="info"
          />
        }
      >
        <Suspense
          fallback={
            <LoadingFallback text="最新コミット情報を読み込み中..." size="md" />
          }
        >
          <RepositoryLatestCommitInfo owner={owner} name={name} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
