import { categoryRouter } from "@/modules/categories/server/procedures";
import { createTRPCRouter } from "../init";
import { studioRouter } from "@/modules/studio/server/procedures";
import { videosRouter } from "@/modules/videos/server/procedures";
// Se usa createTRPCRouter para definir el router principal de la API
export const appRouter = createTRPCRouter({
  // studioRouter: Maneja los endpoints relacionados con videos y usuarios.
  studio: studioRouter,
  // categoryRouter: Maneja los endpoints relacionados con categorías.
  categories: categoryRouter,

  // videosRouter: Maneja los endpoints relacionados con videos.
  videos: videosRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
