const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require('path');
const nodeExternals = require("webpack-node-externals");
const exec = require('child_process').exec;
module.exports = {
    mode: 'production',
    watch: true,
    watchOptions: {
      aggregateTimeout: 200,
    },
    target: 'node',
    entry: "./src/index.ts",
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/',
      filename: "main.js"
    },
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
            exec('node ./public/main.js', (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout);
              if (stderr) process.stderr.write(stderr);
            });
          });
        }
      },
      // new HtmlWebPackPlugin({
      //     template: "./src/index.html", 
      //     filename: "./index.html"
      // }),
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