import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        {
          '@arco-design/web-vue': [
            'Message',
            'Modal',
            'Notification',
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts', // 
      dirs: ['src/composables', 'src/stores'],
      eslintrc: {
        enabled: true, // 
      },
    }),
    Components({
      resolvers: [ArcoResolver()],
      dts: 'src/components.d.ts',
      dirs: ['src/components'],
    }),
    vueDevTools(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 
  ssr: false,
  build: {
    // 
    ssr: false,
    // 
    outDir: 'dist',
    // 
    assetsDir: 'assets',
    // 
    sourcemap: false,
    // 
    minify: 'esbuild',
    // 
    reportCompressedSize: false,
    // 
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          // 
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'arco-vendor': ['@arco-design/web-vue'],
        },
      },
    },
  },
})
