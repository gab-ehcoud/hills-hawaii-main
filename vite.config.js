import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
  };
});
