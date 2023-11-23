import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: false,
  target: 'es2015',
  entry: [
    'src',
    // Игнорировать файлы для тестов
    '!src/**/*.spec.*',
    '!src/**/*.test.*',
    '!src/index-nodemon.ts',
  ],
  // format: ['esm', 'cjs', 'iife'],
  format: ['esm', 'cjs'],
  dts: false,
  // minify: 'terser',
  minify: false,
  clean: true,
  outDir: 'dist',
  // iife
  globalName: 'pluginName',
  external: [],
  ...options,
}));
