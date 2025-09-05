import type { Metadata } from "next";
import { expect, test, describe } from "vitest";

import { generateRepositoryMetadata } from "./metadata";

describe("generateRepositoryMetadata", () => {
  test("正常処理の場合、メタデータが正しく生成される", async () => {
    // 既存のMSWハンドラーを利用してfacebook/reactの情報を取得
    const result = await generateRepositoryMetadata({
      owner: "facebook",
      name: "react",
    });

    expect(result.title).toBe("facebook/react - GitHub リポジトリ検索");
    expect(result.description).toBe(
      "The library for web and native user interfaces.",
    );
    expect(result.openGraph?.title).toBe("facebook/react");
    expect(result.openGraph?.description).toBe(
      "The library for web and native user interfaces.",
    );
    expect(result.openGraph?.images).toEqual([
      {
        url: "https://avatars.githubusercontent.com/u/69631?v=4",
        width: 400,
        height: 400,
        alt: "facebook avatar",
      },
    ]);
  });

  test("リポジトリが見つからない場合はエラー用メタデータを返す", async () => {
    // 既存のMSWハンドラーでは存在しないリポジトリは404を返す
    const result = await generateRepositoryMetadata({
      owner: "nonexistent",
      name: "repo",
    });

    const expected: Metadata = {
      title: "リポジトリが見つかりません - GitHub リポジトリ検索",
      description: "指定されたリポジトリが見つかりませんでした。",
    };

    expect(result).toEqual(expected);
  });
});
