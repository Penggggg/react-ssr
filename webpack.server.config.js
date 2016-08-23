var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: path.resolve(__dirname, 'src/server/app.js'),

  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'src/server/')
  },
  plugins: [
      new webpack.DefinePlugin({
          '__isServer__': true,
          '__isClient__': false
      })
  ],
  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, './node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod;
    return ext;
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'react', 'stage-0'],
              plugins: [
                  'transform-decorators-legacy',
                  'transform-runtime'
               ]
          }
      }
    ]
  }

};
