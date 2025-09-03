"use client";

import { ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
  children: ReactNode;
}

export function CopyButton({ text, className, children }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // エラーは無視
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md text-sm sm:text-base",
        "hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500",
        "transition-colors duration-200",
        className,
      )}
      title={copied ? "コピーしました!" : "クリップボードにコピー"}
    >
      {copied ? (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      )}
      {copied ? "コピーしました!" : children}
    </button>
  );
}

export default CopyButton;
