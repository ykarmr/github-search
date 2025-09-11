import { notFound } from "next/navigation";

import { RepositoryDetailSections } from "./RepositoryDetailSections";

import BackButton from "@/components/ui/BackButton";

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6">
          <BackButton />
        </div>

        <RepositoryDetailSections owner={owner} name={name} />
      </div>
    </div>
  );
}
