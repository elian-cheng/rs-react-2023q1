/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';
import istanbul from 'vite-plugin-istanbul';
import codeCoverageTask from '@cypress/code-coverage/task';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx(),
    tsconfigPaths(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/mocks/*', '**/*/@(index|config).@(tsx|ts)', '**/*/*.@(icon|asset).@(tsx|ts)'],
      enabled: true,
      provider: 'istanbul',
      reporter: ['text'],
      all: true,
    },
  },
});
