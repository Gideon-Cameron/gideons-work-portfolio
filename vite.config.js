import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    sitemap({
      hostname: "https://gideon-cameron.github.io/gideons-work-portfolio/", // 🔹 Replace with your real domain
      routes: [
        { url: "/", priority: 1.0 },
        { url: "/more-projects", priority: 0.8 },
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
