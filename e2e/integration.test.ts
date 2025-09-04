import { test, expect } from "@playwright/test";

/**
 * 統合テスト - 基本的なユーザージャーニー
 */
test.describe("統合テスト", () => {
  test("完全なユーザーフロー: ホーム → 検索 → 詳細 → ホーム", async ({
    page,
  }) => {
    // 1. トップページにアクセス
    await page.goto("/");
    await expect(page).toHaveTitle(/GitHub リポジトリ検索/);

    // 2. 検索キーワードを入力
    const searchInput = page.locator('input[placeholder*="リポジトリを検索"]');
    await searchInput.fill("react");
    await searchInput.press("Enter");

    // 3. 検索結果が表示されることを確認
    await expect(page.locator('[data-testid="search-results"]')).toBeVisible();
    await expect(page).toHaveURL(/\?q=react/);

    // 4. facebook/reactリポジトリ内のリンクをクリックして詳細ページに遷移
    const reactRepoLink = page.locator(
      '[data-testid="repository-card-10270250"] a[href="/repository/facebook/react"]',
    );
    await expect(reactRepoLink).toBeVisible();
    await reactRepoLink.click();

    // 5. 詳細ページが表示されることを確認
    await expect(page).toHaveURL(/\/repository\/facebook\/react/);
    await expect(page.locator('[data-testid="repository-name"]')).toBeVisible();

    // 6. ホームに戻る
    await page.goto("/");

    // 7. ホームページに戻ったことを確認
    await expect(page).toHaveURL("/");
    await expect(page.locator('[data-testid="search-bar"]')).toBeVisible();
  });

  test("エラー発生からの回復フロー", async ({ page }) => {
    await page.goto("/");

    // エラーを発生させる検索クエリ
    const searchInput = page.locator('input[placeholder*="リポジトリを検索"]');
    await searchInput.fill("error");
    await searchInput.press("Enter");

    // エラーメッセージが表示されることを確認
    // APIエラーのメッセージまたはエラー状態の表示を確認
    const errorContainer = page.locator(
      ".bg-red-50, .text-red-500, .text-red-800",
    );
    await expect(errorContainer.first()).toBeVisible({ timeout: 10000 });

    // 再試行ボタンが表示されることを確認
    const retryButton = page.locator('button:has-text("再試行")');
    if (await retryButton.isVisible()) {
      // 再試行ボタンをクリックしてページリロード
      await retryButton.click();
      // リロード後、検索フォームが利用可能になることを確認
      await expect(
        page.locator('input[placeholder*="リポジトリを検索"]'),
      ).toBeVisible({ timeout: 5000 });
    } else {
      // ページをリロードしてエラー状態をクリア
      await page.reload();
      await expect(
        page.locator('input[placeholder*="リポジトリを検索"]'),
      ).toBeVisible();
    }

    const searchInput2 = page.locator('input[placeholder*="リポジトリを検索"]');
    await searchInput2.fill("react");
    await searchInput2.press("Enter");

    // 正常な結果が表示されることを確認
    await expect(page.locator('[data-testid="search-results"]')).toBeVisible();
  });

  test("ブラウザ戻る・進むボタンの動作確認", async ({ page }) => {
    // 1. ホームページから開始
    await page.goto("/");

    // 2. 検索実行
    const searchInput = page.locator('input[placeholder*="リポジトリを検索"]');
    await searchInput.fill("react");
    await searchInput.press("Enter");
    await expect(page).toHaveURL(/\?q=react/);

    // 3. 詳細ページに遷移
    const reactRepoLink = page.locator(
      '[data-testid="repository-card-10270250"] a[href="/repository/facebook/react"]',
    );
    await reactRepoLink.click();
    await expect(page).toHaveURL(/\/repository\/facebook\/react/);

    // 4. ブラウザの戻るボタンを使用
    await page.goBack();
    await expect(page).toHaveURL(/\?q=react/);
    await expect(page.locator('[data-testid="search-results"]')).toBeVisible();

    // 5. さらに戻る
    await page.goBack();
    await expect(page).toHaveURL("/");

    // 6. 進むボタンを使用
    await page.goForward();
    await expect(page).toHaveURL(/\?q=react/);
  });

  test("レスポンシブ統合テスト", async ({ page }) => {
    // モバイルサイズでのフル操作
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto("/");
    await expect(page.locator('[data-testid="search-bar"]')).toBeVisible();

    // 検索実行
    const searchInput = page.locator('input[placeholder*="リポジトリを検索"]');
    await searchInput.fill("react");
    await searchInput.press("Enter");

    // 検索結果がモバイルで適切に表示されることを確認
    await expect(page.locator('[data-testid="search-results"]')).toBeVisible();
    const reactRepo = page.locator('[data-testid="repository-card-10270250"]');
    await expect(reactRepo).toBeVisible();

    // 詳細ページに遷移
    const reactRepoLink = reactRepo.locator(
      'a[href="/repository/facebook/react"]',
    );
    await reactRepoLink.click();

    // 詳細ページがモバイルで適切に表示されることを確認
    await expect(page).toHaveURL(/\/repository\/facebook\/react/);
    await expect(page.locator('[data-testid="repository-name"]')).toBeVisible();
  });
});
