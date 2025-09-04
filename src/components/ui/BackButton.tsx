import Link from "next/link";

import { cn } from "@/lib/utils";

interface BackButtonProps {
  className?: string;
  label?: string;
  href?: string;
}

export function BackButton({
  className,
  label = "戻る",
  href = "/",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      data-testid="back-button"
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium",
        "text-gray-700 bg-white",
        "border border-gray-300 rounded-md",
        "hover:bg-gray-50 hover:text-gray-900",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        "transition-colors duration-200",
        className,
      )}
      role="button"
      aria-label="前のページに戻る"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {label}
    </Link>
  );
}

export default BackButton;
