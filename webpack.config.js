const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/public/index.html",
  filename: "index.html",
});

const CompressPlugin = new CompressionPlugin({
  test: /\.(js|jsx|css|scss|html|svg)$/,
  algorithm: "gzip",
  deleteOriginalAssets: false,
});

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|json)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
      {
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
        test: /\.scss$/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, CompressPlugin],
};
