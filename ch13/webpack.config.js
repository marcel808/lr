module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js'
  },
  devtool: 'source-map',   /* allow setting breakpoints in original source */
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react', 'stage-2'] }
      }
    ]
  },

  plugins: [
          // show the time when the compile begins
          function() {
              this.plugin('watch-run', function(watching, callback) {
                  console.log('Begin compile at ' + new Date());
                  callback();
              })
          }
      ]
};
