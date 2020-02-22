const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    "biblioboard-web-catalog": [
      "./src/stylesheets/app.scss",
      './src/index.tsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg).*$/,
        loader: 'url-loader?limit=100000'
      }
    ],
  },
  plugins: [
    // jsdom is imported by opds-web-client, but causes errors
    // in the browser even if it is never used, so we ignore it:
    new webpack.IgnorePlugin(/jsdom$/),

    // Separate CSS file.
    new MiniCssExtractPlugin({ filename: "[name].css" })
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss.', '.css' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
  },
};