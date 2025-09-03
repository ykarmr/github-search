import { FallbackProps } from "react-error-boundary";

// エラーフォールバックコンポーネント
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-32 p-6 text-center">
      <div className="text-red-500 text-lg font-semibold mb-2">
        エラーが発生しました
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        予期しないエラーが発生しました。ページを再読み込みしてください。
      </p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        再試行
      </button>
      {process.env.NODE_ENV === "development" && error && (
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-gray-500">
            エラー詳細（開発環境のみ）
          </summary>
          <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto">
            {error.stack}
          </pre>
        </details>
      )}
    </div>
  );
}

export default ErrorFallback;
