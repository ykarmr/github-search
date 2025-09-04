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
    notFound();
  }

  return <RepositoryDetail repository={result.data} />;
}
