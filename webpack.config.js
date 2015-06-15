var Webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [ './app/index.js' ],
  output: {
    path: path.join( __dirname, '/build' ),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new Webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel?stage=0&cacheDirectory' ],
      include: path.join(__dirname, 'app')
    }]
  }
};
