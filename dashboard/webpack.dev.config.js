const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/dashboard.js",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "./dist"),
    publicPath: "http://localhost:9000/",
  },
  mode: "development",
  devServer: {
    port: 9000,
    hot: true,
    static: { directory: path.join(__dirname, "./dist") },
    devMiddleware: {
      index: "china.html",
      writeToDisk: true,
    },
    historyApiFallback: {
      index: "dashboard.html",
    },
  },
  module: {
    rules: [
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
      title: "Dashboard",
      filename: "dashboard.html",
    }),
    new ModuleFederationPlugin({
      name: "App",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js",
        ChinaApp: "ChinaApp@http://localhost:9002/remoteEntry.js",
      },
    }),
  ],
};
