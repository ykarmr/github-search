# GitHub Repository Search App

## 🚀 概要

このアプリケーションは、GitHub APIを使用してリポジトリを検索し、詳細情報を表示する機能を提供します。

### 主な機能

- 🔍 **リポジトリ検索**: キーワードやリポジトリ名でGitHubリポジトリを検索
- 📊 **詳細情報表示**: リポジトリの統計情報、言語構成、最新コミット情報
- 📱 **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- 🧪 **包括的なテスト**: ユニット、統合、E2Eテストを完備

## 🛠 技術スタック

### フロントエンド

- **Next.js 15** - App Router使用
- **React 19** - 最新のReact機能を活用
- **TypeScript** - 型安全性の確保
- **Tailwind CSS** - ユーティリティファーストCSS

### API・データ

- **GitHub REST API** - リポジトリデータの取得
- **Octokit** - GitHub API クライアント
- **Server Actions** - フォーム処理とデータ更新

### テスト

- **Vitest** - 高速なユニット・統合テスト
- **React Testing Library** - コンポーネントテスト
- **Playwright** - E2Eテスト
- **MSW** - APIモックによるテスト

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
# E2Eテスト実行
pnpm test:e2e

# UIモードでE2Eテスト
pnpm test:e2e:watch
```

## 🏗 プロジェクト構造

```txt
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ホームページ（検索機能）
│   └── repository/         # リポジトリ詳細ページ
│       └── [owner]/
│           └── [name]/
│               ├── page.tsx        # 詳細ページ
│               ├── loading.tsx     # ローディング状態
│               └── not-found.tsx   # 404ページ
├── components/             # Reactコンポーネント
│   ├── search/             # 検索関連コンポーネント
│   ├── repository/         # リポジトリ関連コンポーネント
│   └── ui/                 # 汎用UIコンポーネント
├── lib/                    # ユーティリティ・API
│   ├── github-api.ts       # GitHub API クライアント
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
