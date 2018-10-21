const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = ({mode, presets} = {mode: "production", presets: []}) => {
  return {
    devtool: 'source-map',
    mode,
    entry: './src/main.js',
    output: {
      filename: "bundle[hash].js",
      chunkFilename: "[name].lazy-chunk.js"
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader",
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
            }
          ]
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: "src/index.html"
    }), new webpack.ProgressPlugin()],
  }
};