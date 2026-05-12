import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "three-core": ["three"],
          "r3f": ["@react-three/fiber", "@react-three/drei"],
          "rapier": ["@react-three/rapier"],
          "postprocessing": ["@react-three/postprocessing"],
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
});
