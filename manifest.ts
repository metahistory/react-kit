import { ManifestOptions } from "vite-plugin-pwa"

export const manifest: Partial<ManifestOptions> = {
   name: "Application",
   short_name: "App",
   description: "...",
   theme_color: "#ffffff",
   background_color: "#ffffff",
   icons: [
      {
         src: "icon.png",
         sizes: "192x192",
         type: "image/png",
      },
      {
         src: "icon.png",
         sizes: "512x512",
         type: "image/png",
      },
   ],
}
