import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: ".",
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true, // describe, it, test をインポートせずに使えるようにする設定
    setupFiles: [
      // vitest.setup.tsだと、実行したテストファイルからの相対パスになってしまう
      path.resolve(__dirname, "./vitest.setup.ts"),
    ],
    passWithNoTests: true,
  },
});
