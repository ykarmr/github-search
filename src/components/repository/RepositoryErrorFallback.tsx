"use client";

interface RepositoryErrorFallbackProps {
  error: Error;
}

// エラーフォールバックコンポーネント
export default function RepositoryErrorFallback({
  error,
}: RepositoryErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="text-red-500 text-4xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          エラーが発生しました
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{error.message}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => {
              return window.location.reload();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            再試行
          </button>
          <a
            href="/"
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ホームに戻る
          </a>
        </div>
      </div>
    </div>
  );
}
