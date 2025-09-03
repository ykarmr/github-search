export default function EmptyState() {
  return (
    <div className="text-center py-8 sm:py-12">
      <div className="text-gray-400 dark:text-gray-500 text-4xl sm:text-6xl mb-3 sm:mb-4">
        🔍
      </div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
        リポジトリを検索してください
      </h2>
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 max-w-md mx-auto">
        上の検索バーにキーワードを入力して、GitHubリポジトリを検索できます
      </p>
    </div>
  );
}
