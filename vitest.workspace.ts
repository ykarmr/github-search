import path from "path";

import vitePluginEnv from "vite-plugin-env-compatible";
import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "./vitest.config.mts",
    test: {
      include: ["./src/**/*.node.test.{ts,tsx}"],
      name: "node",
      environment: "jsdom",
      setupFiles: [
        // vitest.setup.tsだと、実行したテストファイルからの相対パスになってしまう
        path.resolve(__dirname, "./vitest.setup.node.ts"),
      ],
      clearMocks: true,
    },
  },
  {
    extends: "./vitest.config.mts",
    plugins: [
      // ブラウザモードでNext.jsの環境変数を読み込めるようにする設定
      vitePluginEnv({
        mountedPath: "process.env",
      }),
    ],
    test: {
      include: ["./src/**/*.browser.test.{ts,tsx}"],
      name: "browser",
      browser: {
        enabled: true,
        provider: "playwright",
        headless: true,
        instances: [{ browser: "chromium" }],
        screenshotFailures: false,
      },
      testTimeout: 5000,
    },
  },
]);
