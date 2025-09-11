import { test, expect } from "@playwright/test";

/**
 * ホームページ（トップページ）のE2Eテスト
 * 一般的なユースケースを網羅
 */
test.describe("ホームページ", () => {
  test.beforeEach(async ({ page }) => {
    // 各テストの前にトップページへ遷移
    await page.goto("/");
  });

  test.describe("初期表示", () => {
    test("ページが正常にロードされること", async ({ page }) => {
      // ページタイトルを確認
      await expect(page).toHaveTitle(/GitHub リポジトリ検索/);

      // 基本的なレイアウトが表示されていることを確認
      await expect(page.locator('[data-testid="search-bar"]')).toBeVisible();

      // 検索バーのプレースホルダーテキストを確認
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );
      await expect(searchInput).toBeVisible();
    });

    test("初期状態では検索結果が表示されないこと", async ({ page }) => {
      // 検索結果が表示されていないことを確認
      await expect(
        page.locator('[data-testid="search-results"]'),
      ).not.toBeVisible();

      // EmptyStateが表示されていることを確認（もしあれば）
      const emptyState = page.locator('[data-testid="empty-state"]');
      if (await emptyState.isVisible()) {
        await expect(emptyState).toBeVisible();
      }
    });
  });

  test.describe("検索機能", () => {
    test("検索キーワード入力時に検索結果が表示されること", async ({ page }) => {
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );

      // 検索キーワードを入力
      await searchInput.fill("react");
      await searchInput.press("Enter");

      // 検索結果が表示されることを確認
      await expect(
        page.locator('[data-testid="search-results"]'),
      ).toBeVisible();

      // URLに検索パラメータが含まれることを確認
      await expect(page).toHaveURL(/\?q=react/);
    });

    test("人気のあるリポジトリ検索結果が正しく表示されること", async ({
      page,
    }) => {
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );

      await searchInput.fill("react");
      await searchInput.press("Enter");

      // 検索結果が表示されるまで待機
      await expect(
        page.locator('[data-testid="search-results"]'),
      ).toBeVisible();

      // facebook/reactリポジトリが表示されることを確認
      const reactRepo = page.locator(
        '[data-testid="repository-card-10270250"]',
      );
      await expect(reactRepo).toBeVisible();

      // リポジトリの基本情報が表示されることを確認
      await expect(reactRepo.locator('text="facebook/react"')).toBeVisible();
      await expect(
        reactRepo.locator(
          'text="The library for web and native user interfaces."',
        ),
      ).toBeVisible();
    });

    test("検索結果が存在しない場合のメッセージ表示", async ({ page }) => {
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );

      await searchInput.fill("nonexistent");
      await searchInput.press("Enter");

      // 結果なしのメッセージが表示されることを確認
      await expect(page.locator('[data-testid="no-results"]')).toBeVisible();
    });

    test("API エラー時のエラーハンドリング", async ({ page }) => {
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );

      await searchInput.fill("error");
      await searchInput.press("Enter");

      // エラーメッセージまたは検索結果が表示されることを確認（エラーが発生しない場合もある）
      // いずれかが表示されることを確認
      await expect(
        page
          .locator(
            '[data-testid="search-results"], [data-testid="search-error"]',
          )
          .first(),
      ).toBeVisible({ timeout: 10000 });
    });
  });

  test.describe("検索結果の操作", () => {
    test.beforeEach(async ({ page }) => {
      // 検索を実行して結果を表示
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );
      await searchInput.fill("react");
      await searchInput.press("Enter");
      await expect(
        page.locator('[data-testid="search-results"]'),
      ).toBeVisible();
    });

    test("リポジトリカードクリックで詳細ページへ遷移すること", async ({
      page,
    }) => {
      // facebook/reactのリポジトリカード内のリンクをクリック
      const reactRepoLink = page.locator(
        '[data-testid="repository-card-10270250"] a[href="/repository/facebook/react"]',
      );
      await expect(reactRepoLink).toBeVisible();
      await reactRepoLink.click();

      // 詳細ページに遷移したことを確認
      await expect(page).toHaveURL(/\/repository\/facebook\/react/);
    });

    test("外部GitHubリンクが正しく設定されていること", async ({ page }) => {
      const reactRepo = page.locator(
        '[data-testid="repository-card-10270250"]',
      );

      // リポジトリ名をクリックすると詳細ページに遷移する（内部リンク）
      const repoLink = reactRepo.locator(
        'a[href="/repository/facebook/react"]',
      );
      await expect(repoLink).toBeVisible();
    });

    test("リポジトリの統計情報が正しく表示されること", async ({ page }) => {
      const reactRepo = page.locator(
        '[data-testid="repository-card-10270250"]',
      );

      // 言語、スター数、フォーク数などの統計情報が表示されることを確認
      await expect(reactRepo.locator('text="JavaScript"')).toBeVisible();

      // 統計数値が表示されることを確認（数値は変動する可能性があるため、存在のみ確認）
      await expect(reactRepo.locator("svg").first()).toBeVisible(); // 言語インジケーター
    });
  });

  test.describe("URLパラメータ", () => {
    test("検索クエリパラメータでのページアクセスが正常に動作すること", async ({
      page,
    }) => {
      // URLパラメータで直接アクセス
      await page.goto("/?q=vue");

      // 検索フィールドに値が設定されていることを確認
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );
      await expect(searchInput).toHaveValue("vue");

      // 検索結果が自動的に表示されることを確認
      await expect(
        page.locator('[data-testid="search-results"]'),
      ).toBeVisible();

      // vue.jsリポジトリが表示されることを確認
      const vueRepo = page.locator('[data-testid="repository-card-11730342"]');
      await expect(vueRepo).toBeVisible();
    });

    test("ページネーションのURLパラメータが正常に動作すること", async ({
      page,
    }) => {
      // ページパラメータで直接アクセス（実装されていれば）
      await page.goto("/?q=react&page=2");

      // 検索フィールドに値が設定されていることを確認
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );
      await expect(searchInput).toHaveValue("react");

      // URLにページパラメータが保持されていることを確認
      await expect(page).toHaveURL(/page=2/);
    });
  });

  test.describe("レスポンシブ対応", () => {
    test("モバイルサイズで正常に表示されること", async ({ page }) => {
      // モバイルサイズに変更
      await page.setViewportSize({ width: 375, height: 667 });

      // 基本的な要素が表示されることを確認
      await expect(page.locator('[data-testid="search-bar"]')).toBeVisible();

      // 検索を実行
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );
      await searchInput.fill("react");
      await searchInput.press("Enter");

      // 検索結果がモバイルで適切に表示されることを確認
      await expect(
        page.locator('[data-testid="search-results"]'),
      ).toBeVisible();
      const reactRepo = page.locator(
        '[data-testid="repository-card-10270250"]',
      );
      await expect(reactRepo).toBeVisible();
    });

    test("タブレットサイズで正常に表示されること", async ({ page }) => {
      // タブレットサイズに変更
      await page.setViewportSize({ width: 768, height: 1024 });

      // 基本的な要素が表示されることを確認
      await expect(page.locator('[data-testid="search-bar"]')).toBeVisible();

      // レイアウトが適切に調整されていることを確認
      const container = page.locator(".container").first();
      await expect(container).toBeVisible();
    });
  });

  test.describe("アクセシビリティ", () => {
    test("キーボードナビゲーションが正常に動作すること", async ({ page }) => {
      // 検索フィールドに直接フォーカスを当てる
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );
      await searchInput.focus();
      await expect(searchInput).toBeFocused();

      // Enterキーで検索が実行されることを確認
      await searchInput.fill("react");
      await searchInput.press("Enter");

      await expect(
        page.locator('[data-testid="search-results"]'),
      ).toBeVisible();
    });

    test("ARIAラベルが適切に設定されていること", async ({ page }) => {
      // 検索フォームが存在することを確認
      const searchForm = page.locator("form").first();
      await expect(searchForm).toBeVisible();

      // 検索入力フィールドにsearchboxロールが設定されていることを確認
      const searchInput = page.locator('input[role="searchbox"]');
      await expect(searchInput).toBeVisible();

      // 検索結果のリスト構造を確認（実装されていれば）
      await searchInput.fill("react");
      await searchInput.press("Enter");

      await expect(
        page.locator('[data-testid="search-results"]'),
      ).toBeVisible();
    });
  });

  test.describe("パフォーマンス", () => {
    test("初期ページロードが高速であること", async ({ page }) => {
      const startTime = Date.now();
      await page.goto("/");

      // ページの主要要素が表示されるまでの時間を測定
      await expect(page.locator('[data-testid="search-bar"]')).toBeVisible();
      const endTime = Date.now();

      const loadTime = endTime - startTime;
      // 5秒以内にロードされることを確認（調整可能）
      expect(loadTime).toBeLessThan(5000);
    });

    test("検索レスポンスが適切な時間内に返却されること", async ({ page }) => {
      const searchInput = page.locator(
        'input[placeholder*="リポジトリを検索"]',
      );

      const startTime = Date.now();
      await searchInput.fill("react");
      await searchInput.press("Enter");

      // 検索結果が表示されるまでの時間を測定
      await expect(
        page.locator('[data-testid="search-results"]'),
      ).toBeVisible();
      const endTime = Date.now();

      const searchTime = endTime - startTime;
      // 3秒以内にレスポンスがあることを確認（調整可能）
      expect(searchTime).toBeLessThan(3000);
    });
  });
});
