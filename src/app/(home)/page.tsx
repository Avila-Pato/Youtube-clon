import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import PageClient from "./client";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  void trpc.hello.prefetch({ text: "Patricio" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Cargando...</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
