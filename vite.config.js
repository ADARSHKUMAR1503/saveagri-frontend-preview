import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        // Dev only: the browser calls /datagov/..., Node adds the key, so the key never reaches the browser
        "/datagov": {
          target: "https://api.data.gov.in",
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/datagov/, "") + (p.includes("?") ? "&" : "?") + `api-key=${env.DATA_GOV_API_KEY || ""}`,
        },
      },
    },
  };
});