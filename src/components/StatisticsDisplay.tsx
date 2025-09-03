import { formatNumber } from "@/lib/utils";

interface StatisticsDisplayProps {
  stats: {
    stars: number;
    watchers: number;
    forks: number;
    issues: number;
  };
  className?: string;
}

export function StatisticsDisplay({
  stats,
  className,
}: StatisticsDisplayProps) {
  const statisticsData = [
    {
      key: "stars",
      label: "Stars",
      value: stats.stars,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      key: "watchers",
      label: "Watchers",
      value: stats.watchers,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      key: "forks",
      label: "Forks",
      value: stats.forks,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "text-green-600 dark:text-green-400",
    },
    {
      key: "issues",
      label: "Issues",
      value: stats.issues,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "text-red-600 dark:text-red-400",
    },
  ];

  return (
    <div className={className}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {statisticsData.map((stat) => {
          return (
            <div
              key={stat.key}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 sm:p-4 text-center"
            >
              <div className={`flex justify-center mb-1 sm:mb-2 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {formatNumber(stat.value)}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatisticsDisplay;
