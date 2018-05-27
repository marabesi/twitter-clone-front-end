const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const settings = require('./settings.json');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/js/jquery-3.2.1.js'),
        path.resolve(__dirname, 'src/sass/style.scss'),
        path.resolve(__dirname, 'src/js/app.js'),
        path.resolve(__dirname, 'src/index.jade'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].bundle.js',
        publicPath: settings.path
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            loader:'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      },
      {
          test: /\.woff$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
          test: /\.(ttf|eot|svg)$/,
          loader: 'file-loader'
      }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.jade',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/login.jade',
            filename: 'login.html'
        }),
        new CopyWebpackPlugin([
            { from: './assets/**/*', to: path.resolve(__dirname, 'dist/') }
        ]),
    ]
};