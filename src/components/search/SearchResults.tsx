import EmptyState from "./EmptyState";
import NoResults from "./NoResults";

import { searchRepositoriesAction } from "@/actions/repository-actions";
import RepositoryList from "@/components/repository/RepositoryList";

interface SearchResultsProps {
  query?: string;
  page: number;
}

// サーバーコンポーネントでの検索結果取得
export default async function SearchResults({
  query,
  page,
}: SearchResultsProps) {
  if (!query?.trim()) {
    return <EmptyState />;
  }

  const result = await searchRepositoriesAction(
    query,
    "stars",
    "desc",
    30,
    page,
  );

  if (result.error) {
    // エラーをthrowして上位のErrorBoundaryでキャッチ
    throw new Error(result.error);
  }

  if (!result.data || result.data.items.length === 0) {
    return <NoResults query={query} />;
  }

  const { items, total_count: totalCount } = result.data;
  const hasMore = page * 30 < totalCount;

  return (
    <div data-testid="search-results">
      <RepositoryList
        repositories={items}
        hasMore={hasMore}
        currentPage={page}
        query={query}
      />
    </div>
  );
}
