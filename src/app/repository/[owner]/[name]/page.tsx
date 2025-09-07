import { Metadata } from "next";

import { generateRepositoryMetadata } from "./metadata";

import { RepositoryDetailContent } from "@/components/repository";
import { loggerWrapper } from "@/lib/logger-wrapper";

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
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// 詳細ページコンポーネント
export default async function RepositoryDetailPage({ params }: PageProps) {
  const { owner, name } = await params;
  return await loggerWrapper(`/repository/${owner}/${name}`, async () => {
    return <RepositoryDetailContent owner={owner} name={name} />;
  });
}
