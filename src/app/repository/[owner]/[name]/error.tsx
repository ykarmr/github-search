"use client";

import { RepositoryErrorFallback } from "@/components/repository";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <RepositoryErrorFallback error={error} />;
}
