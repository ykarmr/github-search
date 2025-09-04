import { Metadata } from "next";

import { RepositoryDetailContent } from "@/components/repository";
import { generateRepositoryMetadata, repositoryViewport } from "@/lib/metadata";

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

// ビューポート設定
export const viewport = repositoryViewport;

// 詳細ページコンポーネント
export default async function RepositoryDetailPage({ params }: PageProps) {
  const { owner, name } = await params;

  return <RepositoryDetailContent owner={owner} name={name} />;
}
