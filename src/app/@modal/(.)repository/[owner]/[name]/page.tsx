import { Metadata } from "next";

import { generateRepositoryMetadata } from "@/app/repository/[owner]/[name]/metadata";
import { RepositoryDetailModal } from "@/components/repository";
import { Modal } from "@/components/ui";

interface PageProps {
  params: Promise<{
    owner: string;
    name: string;
  }>;
}

export const revalidate = 600; // 10分ごとに再検証する

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { owner, name } = await params;
  return generateRepositoryMetadata({ owner, name });
}

export default async function RepositoryModalPage({ params }: PageProps) {
  const { owner, name } = await params;

  return (
    <Modal>
      <RepositoryDetailModal owner={owner} name={name} />
    </Modal>
  );
}
