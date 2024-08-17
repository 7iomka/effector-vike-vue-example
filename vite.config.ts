import { fileURLToPath, URL } from 'node:url';
import md from 'unplugin-vue-markdown/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';
import swc from 'unplugin-swc';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vike({
      prerender: true,
    }),
    md({}),
    swc.vite({
      jsc: {
        experimental: {
          plugins: [['effector-swc-plugin', {}]],
        },
      },
    }),
  ],
});
