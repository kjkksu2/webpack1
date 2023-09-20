const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/china.js",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "./dist"),
    publicPath: "http://localhost:9002/",
  },
  mode: "development",
  devServer: {
    port: 9002,
    hot: true,
    static: { directory: path.join(__dirname, "./dist") },
    devMiddleware: {
      index: "china.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "China",
      filename: "china.html",
      template: "./src/china.html",
      description: "china",
    }),
    new ModuleFederationPlugin({
      name: "ChinaApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ChinaPage": "./src/components/china-page/china-page.js",
      },
      remotes: {
        ImageCaptionApp: "ImageCaptionApp@http://localhost:9003/remoteEntry.js",
      },
    }),
  ],
};
