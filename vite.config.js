import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProduction ? "/gideons-work-portfolio/" : "/", 
  plugins: [
    react(),
    sitemap({
      hostname: "https://gideon-cameron.github.io",
      routes: [
        { url: "/gideons-work-portfolio/", priority: 1.0 },
        { url: "/gideons-work-portfolio/more-projects", priority: 0.8 },
      ],
    }),
  ],
  build: {
    assetsDir: "assets", // ✅ Ensures correct asset paths
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        unused: true,
      },
      output: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
