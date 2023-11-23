import { defineConfig, Options } from 'tsup';

// cp ./src/index.html ./build & browser-sync start --server './build' --files './build' --port 3000
export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: false,
  target: 'es2015',
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,
  minify: false,
  clean: true,
  esbuildOptions(options, context) {
    options.outdir = 'build';
  },
  external: [],
  ...options,
}));
