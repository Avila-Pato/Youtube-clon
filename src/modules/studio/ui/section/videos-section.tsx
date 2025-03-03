"use client";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import VideoThumbail from "@/modules/videos/ui/components/video-thumbail";

export const VideosSection = () => {
  return (
    <Suspense fallback={<p>Cargando..</p>}>
      <ErrorBoundary fallback={<p>Error..</p>}>
        <VideosSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const VideosSectionSuspense = () => {
  const [videos, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <div>
      <div className="border-y">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" pl-6 w-[510px]">Video</TableHead>
              <TableHead className="">Visibilidad</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="">Fecha</TableHead>
              <TableHead className="text-right pr-6">Vistas</TableHead>
              <TableHead className="text-right ">Comentarios</TableHead>
              <TableHead className="text-right ">Likes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videos.pages
              .flatMap((page) => page.items)
              .map((video) => (
                <Link
                  href={`/studio/videos/${video.id}`}
                  key={video.id}
                  legacyBehavior
                >
                  <TableRow className="cursor-pointer">
                    <TableCell>
                      <div className="flex items-center gap-4">
                      <div className="relative aspect-video w-36 shrink-0">
                      <VideoThumbail 
                      imageUrl={video.thumbnailUrl}
                      previewUrl={video.previewUrl} 
                      title={video.title}/>
                      </div>
                      </div>
                    </TableCell>
                    <TableCell>Visibilidad</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Vistas</TableCell>
                    <TableCell>Comentarios</TableCell>
                    <TableCell>Likes</TableCell>
                  </TableRow>
                </Link>
              ))}
          </TableBody>
        </Table>
      </div>
      <InfiniteScroll
        isManual
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};
