"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { cn } from "@/lib/utils";

interface SearchBarProps {
  defaultValue?: string;
  placeholder?: string;
}

export function SearchBar({
  placeholder = "リポジトリを検索してください",
  defaultValue = "",
}: SearchBarProps) {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    if (!query?.trim()) {
      router.push("/");
      return;
    }

    router.push(`/?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
        <div className="relative flex-1">
          <input
            type="text"
            name="query"
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={cn(
              "w-full px-4 py-3 pl-10 sm:pl-12 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg",
              "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none",
              "dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400",
              "placeholder-gray-500 dark:placeholder-gray-400",
              "text-sm sm:text-base",
            )}
            autoComplete="off"
            spellCheck="false"
          />

          {/* 検索アイコン */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>

        {/* 検索ボタン */}
        <button
          type="submit"
          className={cn(
            "w-full sm:w-auto sm:ml-3 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg",
            "hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none",
            "transition-colors duration-200",
            "text-sm sm:text-base",
          )}
        >
          検索
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
