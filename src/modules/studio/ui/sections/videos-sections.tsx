"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { InfiniteScroll } from "@/components/infinite-scroll";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
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
  const [videos, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    { limit: DEFAULT_LIMIT },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );
  return (
    <div className="border-y">
      <TableHeader>
        <TableRow>
          <TableHead className="pl-6 w-[510px]">videos</TableHead>
          <TableHead>visibuilty</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Views</TableHead>
          <TableHead className="text-right">Comments</TableHead>
          <TableHead className="text-right pr-6">Likes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {videos.pages
          .flatMap((page) => page.items)
          .map((video) => (
            <Link
              href={`/videos/studio/${video.id}`}
              key={video.id}
              legacyBehavior
            >
              <TableRow className="cursor-pointer">
                <TableCell>{video.id}</TableCell>
                <TableCell>Visibility</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Views</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Likes</TableCell>
              </TableRow>
            </Link>
          ))}
      </TableBody>

      {
        <InfiniteScroll
          isManual
          hasNextPage={query.hasNextPage}
          isFetchingNextPage={query.isFetchingNextPage}
          fetchNextPage={query.fetchNextPage}
        />
      }
    </div>
  );
};
