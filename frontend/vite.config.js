import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { createRequire } from "module";


const require = createRequire(import.meta.url);
let visualizerPlugin = null;
try {
  const { visualizer } = require("rollup-plugin-visualizer");
  visualizerPlugin = visualizer({ filename: "dist/stats.html", open: false });
} catch (e) {
  
}

export default defineConfig({
  plugins: [react(), ...(visualizerPlugin ? [visualizerPlugin] : [])],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: process.env.VITE_BASE_PATH || "/",
  build: {
    
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        
        
        
        
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
