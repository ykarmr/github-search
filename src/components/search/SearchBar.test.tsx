import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { expect, test, describe, vi, beforeEach, afterEach } from "vitest";

import SearchBar from "./SearchBar";

// Next.jsのuseRouterをモック
const mockPush = vi.fn();
vi.mock("next/navigation", () => {
  return {
    useRouter: () => {
      return {
        push: mockPush,
        replace: vi.fn(),
        prefetch: vi.fn(),
      };
    },
  };
});

describe("SearchBar Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  test("デフォルトの状態で正しくレンダリングされる", () => {
    const { container } = render(<SearchBar />);

    const searchInput = container.querySelector('input[name="query"]');
    const searchButton = screen.getByRole("button", { name: "検索" });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(searchInput).toHaveValue("");
  });

  test("デフォルト値が正しく設定される", () => {
    const { container } = render(<SearchBar defaultValue="react" />);

    const searchInput = container.querySelector('input[name="query"]');
    expect(searchInput).toHaveValue("react");
  });

  test("カスタムプレースホルダーが正しく表示される", () => {
    const customPlaceholder = "カスタムプレースホルダー";
    const { container } = render(<SearchBar placeholder={customPlaceholder} />);

    const searchInput = container.querySelector('input[name="query"]');
    expect(searchInput).toHaveAttribute("placeholder", customPlaceholder);
  });

  test("有効な検索クエリでフォームを送信すると正しいURLに遷移する", async () => {
    const { container } = render(<SearchBar />);

    const searchInput = container.querySelector(
      'input[name="query"]',
    ) as HTMLInputElement;
    const searchButton = screen.getByRole("button", { name: "検索" });

    // 検索クエリを入力
    fireEvent.change(searchInput, { target: { value: "react" } });

    // フォームを送信
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/?q=react");
    });
  });

  test("空の検索クエリでフォームを送信するとホームページに遷移する", async () => {
    render(<SearchBar />);

    const searchButton = screen.getByRole("button", { name: "検索" });

    // 空の状態でフォームを送信
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  test("空白のみの検索クエリでフォームを送信するとホームページに遷移する", async () => {
    const { container } = render(<SearchBar />);

    const searchInput = container.querySelector(
      'input[name="query"]',
    ) as HTMLInputElement;
    const searchButton = screen.getByRole("button", { name: "検索" });

    // 空白のみを入力
    fireEvent.change(searchInput, { target: { value: "   " } });

    // フォームを送信
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  test("特殊文字を含む検索クエリが正しくエンコードされる", async () => {
    const { container } = render(<SearchBar />);

    const searchInput = container.querySelector(
      'input[name="query"]',
    ) as HTMLInputElement;
    const searchButton = screen.getByRole("button", { name: "検索" });

    // 特殊文字を含むクエリを入力
    fireEvent.change(searchInput, { target: { value: "react & vue" } });

    // フォームを送信
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/?q=react%20%26%20vue");
    });
  });

  test("Enterキーでフォームが送信される", async () => {
    const { container } = render(<SearchBar />);

    const searchInput = container.querySelector(
      'input[name="query"]',
    ) as HTMLInputElement;
    const form = container.querySelector("form") as HTMLFormElement;

    // 検索クエリを入力
    fireEvent.change(searchInput, { target: { value: "vue" } });

    // フォームでEnterキーを押すことをシミュレート
    fireEvent.submit(form);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/?q=vue");
    });
  });

  test("前後の空白が削除された状態で検索が実行される", async () => {
    const { container } = render(<SearchBar />);

    const searchInput = container.querySelector(
      'input[name="query"]',
    ) as HTMLInputElement;
    const searchButton = screen.getByRole("button", { name: "検索" });

    // 前後に空白があるクエリを入力
    fireEvent.change(searchInput, { target: { value: "  javascript  " } });

    // フォームを送信
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/?q=javascript");
    });
  });
});
