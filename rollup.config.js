import alias from '@rollup/plugin-alias';
import svgr from '@svgr/rollup';
import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import aliasPaths from './jsconfig.json';
import copy from 'rollup-plugin-copy';

const BUILD_TYPE = process.env.BUILD_TYPE;
const NODE_ENV = 'production';

// Convert jsonfig paths into webpack alias
const cleanPaths = Object.fromEntries(
  Object.keys(aliasPaths.compilerOptions.paths).map((key) => {
    return [
      key.split('/*')[0],
      path.resolve(
        __dirname,
        aliasPaths.compilerOptions.paths[key][0].split('/*')[0]
      ),
    ];
  })
);

// Build { find, replacement } alias for rollup with griddo alias
const rollUpGriddoAliases = Object.keys(cleanPaths).map((key) => ({
  find: key,
  replacement: cleanPaths[key],
}));

// Debugging msg
if (BUILD_TYPE !== 'patch') {
  console.log('👍 Optimized bundle, terser plugin active');
} else {
  console.warn('⚠️  Non-optimized developer bundle (no terser plugin)');
}

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
  plugins: [
    alias({
      entries: [...rollUpGriddoAliases],
    }),
    copy({
      targets: [{ src: 'src/static/fonts/', dest: 'dist' }],
    }),
    svgr(),
    postcss(),
    json({
      // All JSON files will be parsed by default,
      // but you can also specifically include/exclude files
      include: ['node_modules/**', './src/**'],

      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false

      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: '  ',

      // ignores indent and generates the smallest code
      compact: true, // Default: false

      // generate a named export for every property of the JSON object
      namedExports: true, // Default: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs({
      exclude: 'src/**',
      namedExports: {
        'react-dom': ['createPortal', 'findDOMNode'],
        '@artsy/fresnel': ['createMedia'],
        '@griddo/core': ['ComponentWrapper'],
      },
    }),
    // BUILD_TYPE === "patch" ? undefined : terser(),
    // Active terser allways to test core web vitals (temporary)
    // terser(),
  ],
  external: [
    'styled-components',
    '@sqymagma/theme',
    '@sqymagma/elements',
    'beautiful-react-hooks',
    'react',
  ],
};
