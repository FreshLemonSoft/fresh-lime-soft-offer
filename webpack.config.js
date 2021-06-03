const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

let optimization = {
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        mangle: {
          reserved: ["$", "exports", "require"],
        },
        output: {
          comments: false,
        },
      },
      extractComments: false,
      cache: true,
      parallel: true,
      sourceMap: true,
    }),
  ],
};

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('development'),
  },  
  HOST_URL: JSON.stringify('http://3.122.249.144:9000')

  // dev server 
  
  // HOST_URL: JSON.stringify('http://localhost:9000')
};

module.exports = env => {
  const isProd = JSON.parse(env.production);
  
  return {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "source-map" : "eval-source-map",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
      path: path.resolve(__dirname, "./dist"),
      publicPath: "/dist/",
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.(css|sass|scss)$/,
          include: [
            path.resolve(__dirname, "./src"),
          ],
          use: [
            "vue-style-loader",
            {
              loader: "css-loader",
              options: {
                esModule: false,
              }
            },
            {
              loader: "postcss-loader",
              options: {
                parser: "postcss-scss",
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
        {
          test: /\.vue$/,
          include: [
            path.resolve(__dirname, "./src")
          ],
          use: ["vue-loader"],
        },
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, "./src"),
          ],
          use: ["babel-loader"],
        },
        {
          test: /\.(jpg)$/,
          use: ['file-loader']
        }
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new Dotenv(),
      new webpack.DefinePlugin(GLOBALS)
    ],
    externals: {
      HOST_URL: 'HOST_URL'
    },
    optimization: isProd ? optimization : {},
    devServer: {
      hot: true,
      stats: "minimal",
      contentBase: path.resolve(__dirname),
      overlay: true,
      historyApiFallback: true, // This is needed so webpack dev server falls back to index.html when visiting other routes
    },
  };
};