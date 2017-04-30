const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/sass/style.scss'),
        path.resolve(__dirname, 'src/js/app.js'), 
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{ 
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                loader: 'css-loader?importLoaders=1',
            }),
        },{ 
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
    },
    plugins: [
        new ExtractTextPlugin('app.bundle.css'),
    ]
};