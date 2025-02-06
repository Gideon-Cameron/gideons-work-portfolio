import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  base: "/gideons-work-portfolio/", // ✅ Base path matches GitHub repository
  plugins: [
    react(),
    sitemap({
      hostname: "https://gideon-cameron.github.io", // ✅ Correct for sitemap
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
  // ✅ Handles SPA routing issues on GitHub Pages
  server: {
    fs: {
      strict: false,
    },
  },
});
