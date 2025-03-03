import { headers } from "next/headers";
import { mux } from "@/lib/mux";
import {
  VideoAssetCreatedWebhookEvent,
  VideoAssetErroredWebhookEvent,
  VideoAssetReadyWebhookEvent,
  VideoAssetTrackReadyWebhookEvent,
  VideoAssetDeletedWebhookEvent
} from "@mux/mux-node/resources/webhooks.mjs";
import { db } from "@/db";
import { videos } from "@/db/schema";
import { eq } from "drizzle-orm";

const SIGNING_SECRET = process.env.MUX_WEBHOOK_SECRET!;

type WebhookEvent =
  | VideoAssetCreatedWebhookEvent
  | VideoAssetErroredWebhookEvent
  | VideoAssetReadyWebhookEvent
  | VideoAssetTrackReadyWebhookEvent
  | VideoAssetDeletedWebhookEvent;
   

export const POST = async (request: Request) => {
  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Mux Dashboard to .env.local"
    );
  }
  const headersPayload = await headers();
  const muxSignature = headersPayload.get("Mux-Signature");

  if (!muxSignature) {
    return new Response("Error: Missing Mux headers", {
      status: 400,
    });
  }

  const payload = await request.json();
  const body = JSON.stringify(payload);

  mux.webhooks.verifySignature(
    body,
    {
      "mux-signature": muxSignature,
    },
    SIGNING_SECRET
  );
  switch (payload.type as WebhookEvent["type"]) {
    case "video.asset.created": {
      const data = payload.data as VideoAssetCreatedWebhookEvent["data"];

      if (!data.upload_id) {
        return new Response("Error: Missing upload_id", {
          status: 400,
        });
      }
      await db
        .update(videos)
        .set({
          muxAssetId: data.id,
          muxStatus: data.status,
        })
        .where(eq(videos.muxUploadId, data.upload_id));
      break;
    }
    case "video.asset.ready": {
      const data = payload.data as VideoAssetReadyWebhookEvent["data"];
      const playbackId = data.playback_ids?.[0].id;

      if(!data.upload_id) {
        return new Response("Misiing upload ID", { status: 400})
      }

      if(!playbackId) {
        return new Response("Missing Playback ID", {status: 4000})
      }

      const thumbnailUrl = `https://image.mux.com/${playbackId}/thumbnail.jpg`;
      const previewUrl = `https://image.mux.com/${playbackId}/animated.gif`;

      const duration = data.duration ? Math.round(data.duration * 1000) : 0;

      await db 
      .update(videos)
      .set({
        muxStatus: data.status,
        muxPlaybackId: playbackId,
        muxAssetId: data.id,
        thumbnailUrl,
        previewUrl,
        duration
      })
      .where(eq(videos.muxUploadId, data.upload_id))
      break
    }
    case "video.asset.errored": {
      const data = payload.data as VideoAssetErroredWebhookEvent["data"];

      if(!data.upload_id) {
        return new Response("Missing upload ID", {status: 400});
      }
      await db 
      .update(videos)
      .set({
        muxStatus: data.status,
      })
      .where(eq(videos.muxUploadId, data.upload_id))
      break;
    }
    case "video.asset.deleted": {
      const data = payload.data as VideoAssetDeletedWebhookEvent["data"];

      if(!data.upload_id) {
        return new Response("Missing upload ID", {status: 400});
      }
      await db 
      .delete(videos)
      .where(eq(videos.muxAssetId, data.upload_id))
      break;
    }
    case "video.asset.track.ready": {
      const data = payload.data as VideoAssetTrackReadyWebhookEvent["data"] & {
        asset_id: string
      }

      //typescript incorrectamente dice que asset_id no existe

      const assetId = data.asset_id;
      const trackId = data.id;
      const status = data.status;

      if(!assetId) {
        return new Response("Missing upload ID", {status: 400});
      }

      await db
      .update(videos)
      .set({
        muxTrackId: trackId,
        muxTrackStatus: status,
      })
      .where(eq(videos.muxAssetId, assetId));
      break;
    }
    
  }
  return new Response("Webhook received", { status: 200 });
};
