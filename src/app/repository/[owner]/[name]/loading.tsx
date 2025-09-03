import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <LoadingSpinner size="lg" text="リポジトリ詳細を読み込み中..." />
    </div>
  );
}
