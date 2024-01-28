/// <reference types="vitest" />

import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    reporters: ['html'],
    coverage: {
      reporter: ['html'],
      reportsDirectory: '.coverage',
      enabled: true,
      provider: 'istanbul',
      exclude: [
        ...configDefaults.exclude,
        "**/html/**",
        "**/src/index.ts",
        "**/test/utils/**",
      ]
    }
  }
})
