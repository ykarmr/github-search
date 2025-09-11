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
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="mb-4 sm:mb-6">
          <BackButton />
        </div>

        <RepositoryDetailSections owner={owner} name={name} />
      </div>
    </div>
  );
}
