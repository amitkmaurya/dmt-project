
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";


export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development"],
  base: "/dmt-project/",
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));

