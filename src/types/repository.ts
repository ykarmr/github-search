// GitHub API のレスポンス型定義

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  ssh_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  default_branch: string;
  topics: string[];
  license: License | null;
  owner: Owner;
  languages_url: string;
  commits_url: string;
}

export interface Owner {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  type: "User" | "Organization";
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string | null;
}

export interface SearchRepositoriesResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}

export interface LanguageStats {
  [language: string]: number;
}

export interface LatestCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
  author: {
    login: string;
    avatar_url: string;
  } | null;
  html_url: string;
}

export interface RepositoryDetail extends Repository {
  languageStats?: LanguageStats;
  latestCommit?: LatestCommit;
}

// 検索パラメータの型
export interface SearchParams {
  q: string;
  sort?: "stars" | "forks" | "help-wanted-issues" | "updated";
  order?: "desc" | "asc";
  per_page?: number;
  page?: number;
}

// UI コンポーネントのプロパティ型
export interface RepositoryCardProps {
  repository: Repository;
}

export interface RepositoryDetailProps {
  repository: RepositoryDetail;
}

// エラー型
export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}
