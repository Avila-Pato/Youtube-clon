import { VideosSection } from "../section/videos-section";

export const StudioView = () => {
  return (
    <div className="flex flex-col gap-y-6 pt-2.5">
      <div className="px-4">
        <h1 className="text-2xl font-bold">Contenido del canal</h1>
        <p className="text-sm text-muted-foreground">
          Administra tu canal y contenido
        </p>
      </div>
      <div></div>
      <VideosSection />
    </div>
  );
};
