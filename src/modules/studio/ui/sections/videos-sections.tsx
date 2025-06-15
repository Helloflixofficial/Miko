"use client";

import { trpc } from "@/trpc/client";

export const VideosSection = async () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    { limit: 5 },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );
  return <div>videos Sections</div>;
};
