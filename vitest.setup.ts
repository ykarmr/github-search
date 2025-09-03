import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll, vi } from "vitest";

import { server } from "./src/__tests__/mocks/server";

vi.mock("server-only", () => {
  return {
    // mock server-only module
  };
});

// MSWの設定
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
