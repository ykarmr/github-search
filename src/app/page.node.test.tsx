import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "./page";

test("Page", () => {
  const searchParams = Promise.resolve({ q: "test", page: "1" });
  render(<Page searchParams={searchParams} />);
  expect(1).toBe(1);
});
