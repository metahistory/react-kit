import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { VitePWA } from "vite-plugin-pwa"
import { manifest } from "./manifest"

export default defineConfig({
   envPrefix: "APP_",
   plugins: [
      react(),
      VitePWA({
         mode: "development",
         manifest,
         registerType: "autoUpdate",
         injectRegister: "auto",
         devOptions: {
            enabled: true,
         },
      }),
   ],
})
