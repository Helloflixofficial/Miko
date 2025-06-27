"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
export const VideosSection = async () => {
  return (
    <Suspense fallback={<p>Loading..</p>}>
      <ErrorBoundary fallback={<p>Error..</p>}>
        <VideosSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

export const VideosSectionSuspense = async () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    { limit: DEFAULT_LIMIT },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );
  return (
    <div>
      {JSON.stringify(data)}
      {/* <div ref={targetRef} /> */}
    </div>
  );
};
