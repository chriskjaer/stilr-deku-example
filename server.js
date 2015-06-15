var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = process.env.PORT || 3000;
var ip = 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  contentBase: './app'
})
.listen(port, ip, function (err) {
  if (err) { console.log(err); }

  console.log('Listening at %s:%s', ip, port);
});
