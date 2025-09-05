"use client";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  function handleReload() {
    window.location.reload();
  }

  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900">
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
          <div className="max-w-md w-full text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">💥</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                重大なエラーが発生しました
              </h1>
              <p className="text-gray-600 mb-6">
                アプリケーションで重大なエラーが発生しました。
                <br />
                ページを再読み込みしてください。
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={reset}
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                再試行
              </button>

              <button
                onClick={handleReload}
                className="w-full px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                ページを再読み込み
              </button>
            </div>

            {process.env.NODE_ENV === "development" && error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-gray-500 text-sm mb-2">
                  エラー詳細（開発環境のみ）
                </summary>
                <div className="p-4 bg-gray-100 rounded-lg text-xs overflow-auto max-h-40">
                  <div className="font-semibold text-red-600 mb-2">
                    {error.name}: {error.message}
                  </div>
                  <pre className="text-gray-700 whitespace-pre-wrap">
                    {error.stack}
                  </pre>
                  {error.digest && (
                    <div className="mt-2 text-gray-600">
                      エラーID: {error.digest}
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
