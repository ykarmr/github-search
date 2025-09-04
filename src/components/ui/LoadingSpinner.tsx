import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export function LoadingSpinner({
  size = "md",
  className,
  text = "読み込み中...",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-3 w-3 sm:h-4 sm:w-4",
    md: "h-6 w-6 sm:h-8 sm:w-8",
    lg: "h-10 w-10 sm:h-12 sm:w-12",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        className,
      )}
    >
      <div
        className={cn(
          "animate-spin rounded-full border-b-2 border-blue-600",
          sizeClasses[size],
        )}
      />
      {text && (
        <p className="text-xs sm:text-sm text-gray-600 text-center max-w-xs">
          {text}
        </p>
      )}
    </div>
  );
}

export default LoadingSpinner;
