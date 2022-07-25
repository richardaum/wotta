import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: { clientsClaim: true, skipWaiting: true },
      devOptions: { enabled: true },
    }),
  ],
  server: {
    ...(process.env.SSL_HMR === "true" && { hmr: { clientPort: 443 } }),
  },
});
