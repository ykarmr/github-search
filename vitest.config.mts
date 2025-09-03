import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: [
      // vitest.setup.tsだと、実行したテストファイルからの相対パスになってしまう
      path.resolve(__dirname, "./vitest.setup.ts"),
    ],
  },
});
