import LanguageChart from "./LanguageChart";

import { getRepositoryLanguageStatsAction } from "@/actions/repository-actions";

interface RepositoryLanguageChartProps {
  owner: string;
  name: string;
}

export async function RepositoryLanguageChart({
  owner,
  name,
}: RepositoryLanguageChartProps) {
  const result = await getRepositoryLanguageStatsAction(owner, name);

  if (result.error || !result.data) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">言語統計</h2>
        <p className="text-gray-500">言語統計を取得できませんでした</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">言語統計</h2>
      <LanguageChart languages={result.data} />
    </div>
  );
}
