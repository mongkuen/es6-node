var path = require('path')
var nodeExternals = require('webpack-node-externals')
var ReloadServerPlugin = require('reload-server-webpack-plugin')
var PrettierPlugin = require("prettier-webpack-plugin")

var appRoot = path.join(__dirname, '..', '..')

module.exports = {
  target: 'node',
  mode: 'development',
  watch: true,
  entry: path.join(appRoot, 'src', 'index.js'),
  output: {
    filename: 'index.js',
    path: path.join(appRoot, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ReloadServerPlugin({ script: path.join(appRoot, 'build', 'index.js') }),
    new PrettierPlugin({
      semi: false,
      singleQuote: true,
      bracketSpacing: true,
      jsxBracketSameLine: true
    })
  ]
}
