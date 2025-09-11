# GitHub Repository Search App

## 🚀 概要

このアプリケーションは、GitHub APIを使用してリポジトリを検索し、詳細情報を表示する機能を提供します。

### 主な機能

- 🔍 **リポジトリ検索**: キーワードやリポジトリ名でGitHubリポジトリを検索
- 📊 **詳細情報表示**: リポジトリの統計情報、言語構成、最新コミット情報
- 📱 **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- 🧪 **包括的なテスト**: ユニット、ドメインロジックを持つコンポーネントのテスト、E2Eテストを完備

## 🛠 技術スタック

### フロントエンド

- **Next.js 15** - App Router使用
- **React 19**
- **TypeScript**
- **Tailwind CSS**

### API・データ

- **GitHub REST API** - リポジトリデータの取得
- **Octokit** - GitHub API クライアント
- **Server Actions** - フォーム処理とデータ更新

### ログ・監視

- **Pino** - 高性能な構造化ログライブラリ

### テスト

- **Vitest**
- **React Testing Library**
- **Playwright**
- **MSW**

## 📋 必要要件

- Node.js 18以降
- pnpm 8以降
- GitHub Personal Access Token（推奨）

## 🚀 セットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/ykarmr/github-search.git
cd github-search
```

### 2. 依存関係のインストール

```bash
pnpm install
```

### 3. 環境変数の設定

`.env.local`ファイルを作成し、GitHub Personal Access Tokenを設定します：

```bash
# .env.local
GITHUB_TOKEN=your_github_personal_access_token_here
```

### 4. アプリケーションの起動

```bash
# 開発サーバー起動
pnpm dev

# モック環境での開発（APIを使用しない）
pnpm dev:mock
```

アプリケーションは <http://localhost:3000> でアクセスできます。

## 🧪 テスト

### すべてのテストを実行

```bash
pnpm test
```

### ユニット・統合テスト

```bash
# テスト実行
pnpm test:unit

# ウォッチモードでテスト
pnpm test:unit:watch
```

### E2Eテスト

```bash
pnpm test:e2e

```

※ e2eテストの使用上、実行環境や処理タイミングによっては不安定になる可能性があります。
テストに失敗した場合は、該当のテストのみ再実行してください

## 🏗 プロジェクト構造

```txt
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ホームページ（検索機能）
│   ├── not-found.tsx       # 404ページ
│   └── repository/         # リポジトリ詳細ページ
│       └── [owner]/
│           └── [name]/
│               ├── page.tsx        # 詳細ページ
│               ├── error.tsx        # エラーバウンダリー
│               └──  loading.tsx     # ローディング状態
├── components/             # Reactコンポーネント
│   ├── search/             # 検索関連コンポーネント
│   ├── repository/         # リポジトリ関連コンポーネント
│   └── ui/                 # 汎用UIコンポーネント
├── lib/                    # ユーティリティ・API
│   ├── github-api.ts       # GitHub API クライアント
│   ├── logger.ts           # ログライブラリ設定
│   ├── loggerOptions.ts    # ログ設定オプション
│   ├── loggerWrapper.ts    # ログラッパー関数
│   ├── utils.ts            # ユーティリティ関数
│   └── metadata.ts         # メタデータヘルパー
├── types/                  # TypeScript型定義
├── actions/                # Server Actions
└── __tests__/              # テストファイル関連
```

## 🔧 開発

### コード品質

```bash
# リント実行
pnpm lint

# フォーマット修正
pnpm fix:prettier
pnpm fix:eslint
```

### ビルド

```bash
# プロダクションビルド
pnpm build

# 本番サーバー起動
pnpm start
```

## アプリケーションの実装の流れ

1. 環境のセットアップ
   1. Next.jsのセットアップ
   2. linter, formatterのセットアップ
      1. Eslint
      2. Prettier
   3. テスト環境の構築
      1. Vitest
      2. Playwright
2. AIを使い、アプリケーションの骨組みの作成
   1. [プロンプトの作成](./prompt.md)
   2. 1で作成したプロンプトの実行
3. 2で作成したアプリケーションの微修正
4. AIを使い、e2eテストとunitテストを実装

## 工夫した点、こだわった箇所

- AI(Github Copilot)を使い、実装の8割を完成させた
- なるべくサーバーコンポーネントを使い、クライアントコンポーネントの利用を必要最低限に抑えた
- サーバコンポーネントのテスト方法はまだ確立していない認識なので、e2eテストで対応
- MSWを利用して、APIを実際に利用した状態に寄せたMock環境の構築
- SuspenseやError Boundaryの活用
- **React cache**を活用したAPIキャッシュ戦略
  - React 19の`cache`機能を活用してAPIリクエストの重複を防止
  - 同一のパラメータでの複数回のAPI呼び出しを1回にまとめることで、パフォーマンスを向上
  - サーバーサイドレンダリング時のリクエスト効率化を実現

```typescript
import { cache } from "react";

export const searchRepositories = cache(async (params: SearchParams) => {
  // 同じ検索パラメータでの重複リクエストを防止
  // 複数のコンポーネントが同じ検索を実行してもAPIは1回のみ呼ばれる
  const response = await octokit.rest.search.repos(params);
  return response.data;
});

export const getRepository = cache(async (owner: string, repo: string) => {
  // リポジトリ詳細の重複取得を防止
  // 言語情報やコミット情報と並列実行されても、同じリポジトリデータは1回のみ取得
  const response = await octokit.rest.repos.get({ owner, repo });
  return response.data;
});
```

- **unstable_cache**によるServer Actionsのキャッシュ戦略
  - Next.jsの`unstable_cache`を活用してServer Actionsの結果をキャッシュ
  - リクエスト間でのデータ永続化により、同一データへの重複API呼び出しを削減
  - TTL（Time To Live）設定による適切なキャッシュ無効化戦略

```typescript
import { unstable_cache } from "next/cache";

export const searchRepositoriesAction = unstable_cache(
  async (query, sort, order, perPage, page) => {
    // GitHub API呼び出し処理
    const result = await searchRepositories(params);
    return { data: result };
  },
  ["query", "sort", "order", "perPage", "page"], // キャッシュキー
  {
    revalidate: 600, // 10分間キャッシュを保持
  },
);
```

- **階層的なキャッシュ戦略**
  - React cache（リクエスト内キャッシュ）+ unstable_cache（リクエスト間キャッシュ）の組み合わせ
  - 短期間での重複リクエスト防止と中期間でのパフォーマンス向上を両立

- 並列処理による詳細情報取得の最適化

```typescript
const [repository, languages, commits] = await Promise.allSettled([
  getRepository(owner, repo),
  getRepositoryLanguages(owner, repo),
  getLatestCommit(owner, repo),
]);
```

- 構造化ログによる運用監視

```typescript
import { logger } from "@/lib/logger";

// API呼び出しの記録
logger.info({ path, query }, "リクエストを受け取りました");

// エラーの詳細記録
logger.error(
  { error: error.message, path },
  "リクエストの処理中にエラーが発生しました",
);
```

- **Parallel Routes & Intercept Routes** の活用
  - モーダルによるリポジトリ詳細表示の実装を検討
  - URLを保持しながらモーダル表示することで、UXの向上とSEO対策を両立
  - 現在はシンプルなページ遷移だが、将来的にはIntercepting Routesでモーダル表示への拡張を予定

```typescript
// 将来的なParallel Routes構造例
app/
├── @modal/
│   └── (.)repository/[owner]/[name]/page.tsx  // Intercepting Route
├── repository/[owner]/[name]/page.tsx         // 通常ページ
└── layout.tsx                                 // Parallel Routesレイアウト
```
