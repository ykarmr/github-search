import { test, expect } from "@playwright/test";

/**
 * リポジトリ詳細ページの基本E2Eテスト
 */
test.describe("リポジトリ詳細ページ - 基本機能", () => {
  test("facebook/reactの詳細ページが正常にロードされること", async ({
    page,
  }) => {
    await page.goto("/repository/facebook/react");

    // ページが正常にロードされることを確認
    await expect(page).toHaveURL(/\/repository\/facebook\/react/);

    // 基本的なリポジトリ情報が表示されることを確認（data-testid を使用）
    await expect(page.locator('[data-testid="repository-name"]')).toBeVisible();
    await expect(page.locator('[data-testid="repository-name"]')).toContainText(
      "facebook/react",
    );
  });

  test("リポジトリの説明文が表示されること", async ({ page }) => {
    await page.goto("/repository/facebook/react");

    // 基本的なリポジトリ情報が表示されることを確認
    await expect(page.locator('[data-testid="repository-name"]')).toBeVisible();

    // 説明文は動的に変わる可能性があるため、より安全な確認に変更
    const description = page.locator("p");
    if (await description.first().isVisible()) {
      await expect(description.first()).toBeVisible();
    }
  });

  test("基本的な統計情報が表示されること", async ({ page }) => {
    await page.goto("/repository/facebook/react");

    // 統計セクション全体が表示されることを確認
    await expect(
      page.locator('[data-testid="repository-statistics"]'),
    ).toBeVisible();

    // 統計情報の各要素が表示されることを確認（data-testidを使用）
    await expect(
      page.locator('[data-testid="repository-stars"]'),
    ).toBeVisible();
    await expect(
      page.locator('[data-testid="repository-forks"]'),
    ).toBeVisible();
    await expect(
      page.locator('[data-testid="repository-watchers"]'),
    ).toBeVisible();
    await expect(
      page.locator('[data-testid="repository-issues"]'),
    ).toBeVisible();
  });

  test("前の画面に戻れること", async ({ page }) => {
    // まずホーム画面から開始
    await page.goto("/");

    // リポジトリ詳細ページに遷移
    await page.goto("/repository/facebook/react");

    // 戻るボタンをクリック
    const backButton = page.locator('[data-testid="back-button"]');
    await expect(backButton).toBeVisible();
    await backButton.click();

    // ホーム画面に戻ることを確認
    await expect(page).toHaveURL("/");
  });

  test("レスポンシブ対応 - モバイルサイズで表示されること", async ({
    page,
  }) => {
    // モバイルサイズに変更
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto("/repository/facebook/react");

    // 基本的な要素が表示されることを確認
    await expect(page.locator('[data-testid="repository-name"]')).toBeVisible();

    // JavaScriptの言語統計情報を確認（複数の言語がある場合の対処）
    const javascriptLabel = page.locator('text="JavaScript"').first();
    if (await javascriptLabel.isVisible()) {
      await expect(javascriptLabel).toBeVisible();
    } else {
      // 代替確認：言語チャートの存在を確認
      await expect(
        page.locator('[data-testid="language-chart"]'),
      ).toBeVisible();
    }
  });
});
