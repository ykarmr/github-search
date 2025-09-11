import LoadingSpinner from "./LoadingSpinner";

interface LoadingFallbackProps {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingFallback({
  text,
  size = "md",
  className = "flex justify-center py-4",
}: LoadingFallbackProps) {
  return (
    <div className={className}>
      <LoadingSpinner size={size} text={text} />
    </div>
  );
}
