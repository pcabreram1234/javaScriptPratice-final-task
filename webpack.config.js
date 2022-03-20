const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebPackDotEnv = require("dotenv-webpack");
const WebpackCoppyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
    new WebPackDotEnv(),
    new WebpackCoppyPlugin({
      patterns: [
        { from: "src/json/*.json", to: "./assets/json/[name][ext]" },
        {
          from: path.resolve(__dirname, "public", "_redirects"),
          force: true,
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
