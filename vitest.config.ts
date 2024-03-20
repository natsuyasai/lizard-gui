/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    alias: {
      '@renderer': resolve('src/renderer/src'),
      '@': resolve('src/')
    }
  }
})
