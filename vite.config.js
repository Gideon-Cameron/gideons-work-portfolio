import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  base: "/", // ✅ Simplified for Netlify (no subdirectory needed)
  plugins: [
    react(),
    sitemap({
      hostname: "https://your-netlify-site.netlify.app", // 🔑 Replace with your actual Netlify URL after deployment
      routes: [
        { url: "/", priority: 1.0 },
        { url: "/more-projects", priority: 0.8 },
      ],
    }),
  ],
  build: {
    assetsDir: "assets", // ✅ Correct asset path handling
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
