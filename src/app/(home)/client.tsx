"use client";

import { trpc } from "@/trpc/client";

const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Patricio",
  });
  return <div> Page client says: {data.greeting}</div>;
};

export default PageClient;
