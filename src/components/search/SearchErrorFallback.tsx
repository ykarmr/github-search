"use client";

interface SearchErrorFallbackProps {
  error: Error;
}

// エラー専用のフォールバック
export default function SearchErrorFallback({
  error,
}: SearchErrorFallbackProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 sm:mb-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <p className="text-xs sm:text-sm text-red-800">{error.message}</p>
        </div>
        <button
          onClick={() => {
            return window.location.reload();
          }}
          className="ml-4 px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          再試行
        </button>
      </div>
    </div>
  );
}
