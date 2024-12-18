const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/dev-server.js',
    'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    path.resolve(__dirname, '..', './src/index.tsx')
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      type: "asset",
    }],
    parser: {
      css: {
        url: true,
      }
    }
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({template: './public/index.html'})],
  stats: 'errors-only'
}
