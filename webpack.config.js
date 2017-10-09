const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

module.exports = {
  entry: './example/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.svg', 'pdf', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'babel-loader!svg-react-loader'
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true})
  ]
};
