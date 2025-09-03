"use client";

import { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./ErrorFallback";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      FallbackComponent={
        fallback
          ? () => {
              return <>{fallback}</>;
            }
          : ErrorFallback
      }
    >
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
