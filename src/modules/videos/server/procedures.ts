import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
// createTRPCRouter: Función para definir un router en tRPC.
// protectedProcedure: Middleware que protege la consulta, asegurando que solo usuarios autenticados puedan acceder.

export const videosRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const { id: userId } = ctx.user;

    const [video] = await db
      .insert(videos)
      .values({
        userId,
        title: "Untitle",
      })
      .returning();

    return {
      video: video,
    };
  }),
});
