import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind CSS のクラス名をマージするユーティリティ
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 数値をフォーマットする関数（K, M, B単位）
export function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

// 日付をフォーマットする関数
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return "昨日";
  } else if (diffDays < 7) {
    return `${diffDays}日前`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks}週間前`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months}ヶ月前`;
  }
  const years = Math.floor(diffDays / 365);
  return `${years}年前`;
}

// 相対時間を表示する関数
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) {
    return "たった今";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}分前`;
  } else if (diffHours < 24) {
    return `${diffHours}時間前`;
  } else if (diffDays < 7) {
    return `${diffDays}日前`;
  }
  return formatDate(dateString);
}

// パーセンテージを計算する関数
export function calculatePercentage(value: number, total: number): number {
  if (total === 0) {
    return 0;
  }
  return Math.round((value / total) * 100);
}

// 言語の色を取得する関数（GitHub風）
export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    "C#": "#239120",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Go: "#00ADD8",
    Rust: "#dea584",
    Swift: "#ffac45",
    Kotlin: "#F18E33",
    Scala: "#c22d40",
    R: "#198CE7",
    Dart: "#00B4AB",
    Vue: "#4FC08D",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
    PowerShell: "#012456",
    Dockerfile: "#384d54",
    Makefile: "#427819",
    YAML: "#cb171e",
    JSON: "#292929",
    Markdown: "#083fa1",
  };

  return colors[language] || "#858585";
}
