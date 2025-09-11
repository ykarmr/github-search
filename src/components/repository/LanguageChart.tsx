import { calculatePercentage, getLanguageColor } from "@/lib/utils";
import { LanguageStats } from "@/types/repository";

interface LanguageChartProps {
  languages: LanguageStats;
  className?: string;
}

export function LanguageChart({ languages, className }: LanguageChartProps) {
  // 言語データを処理
  const languageEntries = Object.entries(languages)
    .sort(([, a], [, b]) => {
      return b - a; // バイト数で降順ソート
    })
    .slice(0, 10); // 上位10言語まで表示

  const totalBytes = languageEntries.reduce((sum, [, bytes]) => {
    return sum + bytes;
  }, 0);

  if (languageEntries.length === 0 || totalBytes === 0) {
    return (
      <div className={className}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">使用言語</h3>
        <p className="text-gray-500">言語情報が利用できません</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
        使用言語
      </h3>

      {/* 言語の横棒チャート */}
      <div className="space-y-2 sm:space-y-3">
        {languageEntries.map(([language, bytes]) => {
          const percentage = calculatePercentage(bytes, totalBytes);
          const color = getLanguageColor(language);

          return (
            <div key={language} className="flex items-center">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: color }}
                      aria-label={`${language} color indicator`}
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                      {language}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 ml-2 flex-shrink-0">
                    {percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div
                    className="h-1.5 sm:h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: color,
                      width: `${percentage}%`,
                    }}
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${language}: ${percentage}%`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 円グラフ風の表示（オプション） */}
      <div className="mt-4 sm:mt-6 flex flex-wrap gap-1 sm:gap-2">
        {languageEntries.slice(0, 5).map(([language, bytes]) => {
          const percentage = calculatePercentage(bytes, totalBytes);
          const color = getLanguageColor(language);

          return (
            <div
              key={language}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs"
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-700 truncate max-w-20 sm:max-w-none">
                {language} {percentage}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LanguageChart;
