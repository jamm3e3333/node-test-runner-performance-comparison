/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globalSetup: 'vitest/setup.ts',
    maxThreads: 1,
    threads: false,
  },
})