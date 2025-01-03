const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: [
      "webpack/hot/dev-server.js",
      "webpack-dev-server/client/index.js?hot=true&live-reload=true",
    ],
    devServer: {
      hot: true,
      open:  true,
      static: [
        {
          directory: path.resolve(__dirname, "..", "public"), // Serve index.html directly
        },
        {
          directory: path.resolve(__dirname, "..", "assets"), // Serve CSS and images
        },
      ],
    },
    plugins: [new ReactRefreshWebpackPlugin()],
}
