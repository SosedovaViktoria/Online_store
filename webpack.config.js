// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslingPlugin = require("eslint-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    new EslingPlugin({ extensions: "ts" }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: "css-loader"
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: "sass-loader"
          }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
        type: "asset",
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          // name: "[name].[ext]",
          // outputPath: 'assets/images', // Chage this like 'public/images' or any other relative path to the root
          // useRelativePath: true,
          }
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};