import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import esMessages from "@/messages/es.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: esMessages.Metadata.title,
    short_name: siteConfig.name,
    description: esMessages.Metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#726b53",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
