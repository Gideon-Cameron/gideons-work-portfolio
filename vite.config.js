import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";

// Detect if it's in production or development
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProduction ? "/gideons-work-portfolio/" : "/",  // ✅ Auto switch
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
