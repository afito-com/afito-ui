import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import externals from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import { readFileSync } from 'fs';

const chunkArray = readFileSync('./src/components/index.js', 'utf8')
  .split('\n') // -> all lines
  .filter(line => line.includes(' from ')) // -> lines which export something
  .map(line => 'src/components/' + /.* from ('|")(\.\/|~)?(.*)('|").*/g.exec(line)[3]); // -> module paths

const input = {
  index: 'src/components/index.js'
};

chunkArray.forEach(path => {
  const name = path
    .split('/')
    .pop()
    .replace(/^\w/, c => c.toLowerCase());
  input[name] = path;
});

export default [
  {
    input,
    output: [
      {
        dir: 'dist/es',
        format: 'es',
        plugins: [terser()]
      }
    ],
    plugins: [
      externals(),
      json(),
      babel({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      resolve(),
      commonjs()
    ]
  }
];
