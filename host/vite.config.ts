import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        micro1: 'http://localhost:5001/assets/micro1.js',
        micro2: 'http://localhost:5002/assets/micro2.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
