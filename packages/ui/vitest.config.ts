import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { configDefaults } from 'vitest/dist/config';

const rootDir = __dirname;

export default defineConfig({
  root: rootDir,
  resolve: {
    alias: {
      '@': resolve(rootDir, 'src'),
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@vue/runtime-dom': '@vue/runtime-dom/dist/runtime-dom.esm-bundler.js',
    },
  },
  optimizeDeps: {
    include: ['@acronis-platform/icons']
  },
  test: {
    include: [
      'src/components/**/*.spec.{ts,tsx}',
      'src/widgets/**/*.spec.{ts,tsx}',
      'src/composables/**/*.spec.{ts,tsx}',
      'src/plugins/**/*.spec.{ts,tsx}',
    ],
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    setupFiles: [resolve(rootDir, 'scripts/testSetup.ts')],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'html', 'json', 'lcov'],
      reportsDirectory: './test/coverage',
      reportOnFailure: true,
      thresholds: {
        statements: 80,
        branches: 60,
        functions: 20,
        lines: 80,
      },
      extension: ['ts', 'tsx', 'vue'],
      exclude: [
        ...configDefaults.coverage.exclude || [],
        '**/scripts/**',
      ],
    },
    testTimeout: 10000
  },
  plugins: [vue(), vueJsx()],
});
