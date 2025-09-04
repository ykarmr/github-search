import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl text-gray-400 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          リポジトリが見つかりませんでした
        </h1>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          指定されたリポジトリが存在しないか、アクセス権限がない可能性があります。
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            ホームに戻る
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            別のリポジトリを検索
          </Link>
        </div>
      </div>
    </div>
  );
}
