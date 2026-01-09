import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Переименовываем папку ресурсов, чтобы избежать конфликта с файлом 'public' на GitHub
  publicDir: 'static',
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  }
});
