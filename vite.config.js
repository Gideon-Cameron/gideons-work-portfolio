import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";
import fs from "fs";
import path from "path";

export default defineConfig({
  base: "/", // ✅ Suitable for Netlify deployment
  plugins: [
    react(),
    sitemap({
      hostname: "https://your-netlify-site.netlify.app", // 🔑 Replace after deployment
      routes: [
        { url: "/", priority: 1.0 },
        { url: "/more-projects", priority: 0.8 },
      ],
    }),
    {
      name: "generate-robots-txt", // ✅ Custom plugin to generate robots.txt
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        const robotsPath = path.join(distDir, "robots.txt");

        if (!fs.existsSync(robotsPath)) {
          fs.writeFileSync(robotsPath, "User-agent: *\nAllow: /\nSitemap: https://your-netlify-site.netlify.app/sitemap.xml");
          console.log("✅ robots.txt generated successfully.");
        }
      },
    },
  ],
  build: {
    assetsDir: "assets",
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
