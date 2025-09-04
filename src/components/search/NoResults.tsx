interface NoResultsProps {
  query: string;
}

export default function NoResults({ query }: NoResultsProps) {
  return (
    <div className="text-center py-8 sm:py-12">
      <div className="text-gray-500 text-base sm:text-lg">
        「{query}」に一致するリポジトリが見つかりませんでした
      </div>
      <p className="text-gray-400 mt-2 text-sm sm:text-base">
        別のキーワードで検索してみてください
      </p>
    </div>
  );
}
