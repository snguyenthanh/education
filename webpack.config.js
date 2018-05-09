var webpack = require('webpack');

var config = {
  entry: __dirname + 'src/index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : __dirname + '/src',
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ //<--key to reduce React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};

module.exports = config;
