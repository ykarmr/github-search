import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";

// カスタムレンダー関数
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, options);
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
