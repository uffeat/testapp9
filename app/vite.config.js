import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    // Allow top-level await
    target: ["es2022", "edge89", "firefox89", "chrome89", "safari15"],
    rollupOptions: {
      plugins: [
        dynamicImportVars({
          // Raise exception on error
          warnOnError: false,
        }),
      ],
    },
  },
})
