import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-Portfolio1/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
