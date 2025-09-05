// ※ 共通処理のパラメータを追加する場合は、middlewareのログの項目も更新してください
export const loggerOptions = {
  formatters: {
    level: (label: string) => {
      return { level: label };
    },
    bindings: () => {
      return {};
    },
  },
  timestamp: () => {
    return `,"datetime":"${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}"`;
  },
};
