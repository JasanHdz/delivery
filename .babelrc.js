const path = require('path')
const aliases = require('./aliases')

const plugins = [
  [
    require.resolve('babel-plugin-styled-components'),
    {
      ssr: true,
      displayName: true,
      preprocess: false,
    }
  ],
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('./')],
      alias: aliases
    },
  ],
  '@babel/plugin-proposal-optional-chaining'
]

module.exports = {
  presets: ['next/babel'],
  plugins
}