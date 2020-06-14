const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require('path');
const nodeExternals = require("webpack-node-externals");
module.exports = {
    entry: "./src/index.ts",
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/',
      filename: "main.js"
    },
    plugins: [
      new HtmlWebPackPlugin({
          template: "./src/index.html", 
          filename: "./index.html"
      }),
      new Dotenv()
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json'
              }
            }, 'eslint-loader'],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    devtool: 'inline-source-map',
};