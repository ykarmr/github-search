import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { beforeAll, afterEach, afterAll, beforeEach, vi } from "vitest";

import { server } from "./src/__tests__/mocks/server";

vi.mock("server-only", () => {
  return {
    // mock server-only module
  };
});

vi.mock("pino", () => {
  return {
    default: vi.fn(() => {
      return {
        info: vi.fn(),
        warn: vi.fn(),
        error: vi.fn(),
        debug: vi.fn(),
        trace: vi.fn(),
        fatal: vi.fn(),
      };
    }),
  };
});

// コンソールログをモック
vi.spyOn(console, "log").mockImplementation(() => {});
vi.spyOn(console, "info").mockImplementation(() => {});
vi.spyOn(console, "warn").mockImplementation(() => {});
vi.spyOn(console, "error").mockImplementation(() => {});

beforeAll(() => {
  // MSWの設定
  server.listen();
});

beforeEach(() => {});

afterEach(() => {
  server.resetHandlers();
  cleanup(); // DOM要素をクリーンアップ
  vi.clearAllMocks(); // すべてのモックをクリア
});

afterAll(() => {
  server.close();
});

// unstable_cacheをモック
vi.mock("next/cache", () => {
  return {
    // eslint-disable-next-line camelcase
    unstable_cache: vi.fn((fn) => {
      return fn;
    }),
  };
});
