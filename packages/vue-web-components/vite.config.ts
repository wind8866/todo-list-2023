import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    target: 'modules',
    minify: 'terser',
    lib: {
      entry: 'src/views/TodoListSearch/index.ts',
      // formats: ['es', 'cjs', 'iife'],
      name: 'TodoListSearch'
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有带短横线的标签名都视为自定义元素
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
    // vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
