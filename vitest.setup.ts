import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll, beforeEach, vi } from "vitest";

import { server } from "./src/__tests__/mocks/server";

vi.mock("server-only", () => {
  return {
    // mock server-only module
  };
});

beforeAll(() => {
  // MSWの設定
  server.listen();
});

beforeEach(() => {
  // コンソールログをモック
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "info").mockImplementation(() => {});
  vi.spyOn(console, "info").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
