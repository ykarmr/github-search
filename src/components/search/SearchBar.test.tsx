import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { test, expect, vi, beforeEach, afterEach } from "vitest";

import { SearchBar } from "./SearchBar";

// Next.jsのルーターをモック
const mockPush = vi.fn();

vi.mock("next/navigation", () => {
  return {
    useRouter: () => {
      return {
        push: mockPush,
      };
    },
  };
});

beforeEach(() => {
  // モック関数をリセット
  mockPush.mockClear();
});

afterEach(() => {
  cleanup();
});

test("初期状態で正しくレンダリングされること", () => {
  render(<SearchBar />);

  expect(screen.getByRole("searchbox")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "検索" })).toBeInTheDocument();
});

test("検索フォームの送信時にルーターが呼ばれること", async () => {
  render(<SearchBar />);

  const searchInput = screen.getByRole("searchbox");
  const submitButton = screen.getByRole("button", { name: "検索" });

  fireEvent.change(searchInput, { target: { value: "react" } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockPush).toHaveBeenCalledWith("/?q=react");
  });
});

test("検索クエリが変更されたときの動作", async () => {
  render(<SearchBar />);

  const searchInput = screen.getByRole("searchbox");
  const submitButton = screen.getByRole("button", { name: "検索" });

  fireEvent.change(searchInput, { target: { value: "vue" } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockPush).toHaveBeenCalledWith("/?q=vue");
  });
});

test("空の検索クエリでの送信", async () => {
  render(<SearchBar />);

  const submitButton = screen.getByRole("button", { name: "検索" });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});

test("空白文字のみの検索クエリでの送信", async () => {
  render(<SearchBar />);

  const searchInput = screen.getByRole("searchbox");
  const submitButton = screen.getByRole("button", { name: "検索" });

  fireEvent.change(searchInput, { target: { value: "   " } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});

test("defaultValueプロパティで初期値が設定される", () => {
  render(<SearchBar defaultValue="react" />);

  const searchInput = screen.getByRole("searchbox");
  expect(searchInput).toHaveValue("react");
});

test("URLエンコードが必要な文字が含まれる検索クエリ", async () => {
  render(<SearchBar />);

  const searchInput = screen.getByRole("searchbox");
  const submitButton = screen.getByRole("button", { name: "検索" });

  fireEvent.change(searchInput, { target: { value: "react & vue.js" } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockPush).toHaveBeenCalledWith("/?q=react%20%26%20vue.js");
  });
});

test("検索入力フィールドのアクセシビリティ", () => {
  render(<SearchBar />);

  const searchInput = screen.getByRole("searchbox");
  expect(searchInput).toHaveAttribute("role", "searchbox");
  expect(searchInput).toHaveAttribute("type", "search");
  expect(searchInput).toHaveAttribute("placeholder");
});

test("フォームにdata-testid属性が設定されていること", () => {
  render(<SearchBar />);

  expect(screen.getByTestId("search-bar")).toBeInTheDocument();
});

test("プレースホルダーをプロパティで変更できること", () => {
  render(<SearchBar placeholder="カスタムプレースホルダー" />);

  const searchInput = screen.getByRole("searchbox");
  expect(searchInput).toHaveAttribute(
    "placeholder",
    "カスタムプレースホルダー",
  );
});
