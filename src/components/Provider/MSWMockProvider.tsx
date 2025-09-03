"use client";

import { Suspense } from "react";
import React from "react";
import { use } from "react";

const mockingEnabled = !!process.env.NEXT_PUBLIC_API_MOCKING;

const mockingEnabledPromise =
  typeof window !== "undefined" && mockingEnabled
    ? import("../../__tests__/mocks/browser").then(async ({ worker }) => {
        await worker.start();
      })
    : Promise.resolve();

function Component({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  use(mockingEnabledPromise);

  return children;
}

export function MSWMockProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mockingEnabled = !!process.env.NEXT_PUBLIC_API_MOCKING;

  return mockingEnabled ? (
    <Suspense fallback={null}>
      <Component>{children}</Component>
    </Suspense>
  ) : (
    children
  );
}
