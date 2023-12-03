import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import macrosPlugin from "vite-plugin-babel-macros";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), macrosPlugin()],
  server: {
    host: "0.0.0.0",
  },
});
