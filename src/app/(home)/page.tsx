import { HydrateClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
export default async function Home() {
  void trpc.categories.getMany.prefetch();
  return (
    <HydrateClient>
      <Suspense
        fallback={
          <p className="text-xl font-semibold tracking-tight">Loading...</p>
        }
      >
        <ErrorBoundary
          fallback={
            <p className="text-xl font-semibold tracking-tight">Erorr..</p>
          }
        >
          <p className="text-xl font-semibold tracking-tight">
            Firetube Content: <Client />
          </p>
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
