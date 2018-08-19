var path = require('path')
var nodeExternals = require('webpack-node-externals');

var appRoot = path.join(__dirname, '..', '..')

module.exports = {
  target: 'node',
  mode: 'development',
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
  }
}
