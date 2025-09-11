interface SectionErrorFallbackProps {
  message: string;
  type?: "error" | "warning" | "info";
}

export function SectionErrorFallback({
  message,
  type = "error",
}: SectionErrorFallbackProps) {
  const colorClasses = {
    error: "text-red-600 bg-red-50",
    warning: "text-orange-600 bg-orange-50",
    info: "text-blue-600 bg-blue-50",
  };

  return (
    <div
      className={`p-4 rounded-lg ${colorClasses[type]}`}
      data-testid="section-error"
    >
      {message}
    </div>
  );
}
