var path = require('path')
var nodeExternals = require('webpack-node-externals')
var ReloadServerPlugin = require('reload-server-webpack-plugin')
var PrettierPlugin = require("prettier-webpack-plugin")
var webpack = require('webpack')

var appRoot = path.join(__dirname, '..', '..')

module.exports = {
  target: 'node',
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  context: appRoot,
  entry: path.join(appRoot, 'src', 'index.js'),
  output: {
    filename: 'index.js',
    path: path.join(appRoot, 'build')
  },
  externals: [nodeExternals()],
  node: {
    __filename: true,
    __dirname: true
  },
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
    }),
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false })
  ],
  resolve: {
    alias: {
      "src": path.join(appRoot, 'src'),
    }
  }
}
