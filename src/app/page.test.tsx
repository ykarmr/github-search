import { expect, test } from "vitest";

import Page from "./page";

test("Page", async () => {
  const result = await Page({
    searchParams: Promise.resolve({ q: "test", page: "1" }),
  });

  expect(result).toBeDefined();
});
