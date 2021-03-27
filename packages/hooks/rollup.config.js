import { babel } from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'

// Rollup accepts ESModule syntax
// Rollup recognizes relative path
const pathName = 'dist/bundle'
const production = process.env.NODE_ENV === 'production' // Returns true if development

const output = [
  {
    file: `${pathName}.cjs.js`,
    format: 'cjs'
  },
  {
    file: `${pathName}.esm.js`,
    format: 'esm'
  },
  {
    name: 'RandomComponent',
    file: `${pathName}.umd.js`,
    format: 'umd',
    globals: {
      react: 'React'
    }
  }
]

export default async () => ({
  input: 'lib/index.ts',
  output,
  plugins: [
    typescript(),
    babel({
      exclude: /node_modules/
    }),
    production && (await import('rollup-plugin-terser')).terser()
  ],
  external: ['react']
})
