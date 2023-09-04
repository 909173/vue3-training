import { resolve } from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3700,
    proxy: {
      "/api": "https://opendata.resas-portal.go.jp/api/v1"
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
})
