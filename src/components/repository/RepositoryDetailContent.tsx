import { notFound } from "next/navigation";

import RepositoryDetail from "./RepositoryDetail";

import { getRepositoryDetailAction } from "@/actions/repository-actions";

interface RepositoryDetailContentProps {
  owner: string;
  name: string;
}

// リポジトリデータ取得コンポーネント
export default async function RepositoryDetailContent({
  owner,
  name,
}: RepositoryDetailContentProps) {
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

    // その他のエラーをthrowして上位のErrorBoundaryでキャッチ
    throw new Error(result.error || "リポジトリの取得に失敗しました");
  }

  return <RepositoryDetail repository={result.data} />;
}
