import { RepositoryDetailSections } from "./RepositoryDetailSections";

import BackButton from "@/components/ui/BackButton";

interface RepositoryDetailModalProps {
  owner: string;
  name: string;
}

export function RepositoryDetailModal({
  owner,
  name,
}: RepositoryDetailModalProps) {
  return (
    <div className="max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="mb-4">
          <BackButton />
        </div>

        <RepositoryDetailSections owner={owner} name={name} />
      </div>
    </div>
  );
}
