import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'mreycode-system',
      fileName: 'index'
    },
    rollupOptions: {
      external: ["react", "react-dom", "clsx"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "clsx": "clsx",
        },
      },
    }
  },
  plugins: [react(), libInjectCss()],
})