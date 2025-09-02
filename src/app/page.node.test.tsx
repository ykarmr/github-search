import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "./page";

test("Page", () => {
  render(<Page />);
  expect(1).toBe(1);
});
