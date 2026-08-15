import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-plugin-electron';
import path from 'path';

export default defineConfig({
  root: 'renderer',
  plugins: [
    react(),
    electron([
      {
        entry: path.resolve(__dirname, 'electron/main.ts'),
        onstart: process.env.DREAM_WORK_MANUAL_ELECTRON ? () => {} : undefined,
        vite: {
          build: {
            outDir: path.resolve(__dirname, 'dist-electron'),
            rollupOptions: {
              external: ['original-fs'],
            },
          },
        },
      },
      {
        entry: path.resolve(__dirname, 'electron/preload.ts'),
        onstart: process.env.DREAM_WORK_MANUAL_ELECTRON ? () => {} : undefined,
        vite: {
          build: {
            outDir: path.resolve(__dirname, 'dist-electron'),
            rollupOptions: {
              external: ['electron'],
              output: {
                format: 'cjs',
                entryFileNames: 'preload.js',
              },
            },
          },
        },
      },
    ]),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    rollupOptions: {
      external: ['ws', 'undici'],
    },
  },
});
