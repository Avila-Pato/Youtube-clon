"use client";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { Loader2Icon, PlusIcon } from "lucide-react";
import { toast } from "sonner";

export const StudioUplaodModal = () => {
  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    // trae los datos de la peticion sin nececidad de actualizar la pagina
    onSuccess: () => {
      toast.success("Video created");
      utils.studio.getMany.invalidate();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <Button
      variant="secondary"
      onClick={() => create.mutate()}
      disabled={create.isPending}
    >
      {create.isPending ? (
        <Loader2Icon className="animate-spin" />
      ) : (
        <PlusIcon />
      )}
      Create
    </Button>
  );
};
