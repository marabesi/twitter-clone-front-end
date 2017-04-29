const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

module.exports = {
    entry: {
        path: path.resolve(__dirname, 'src/js/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    plugins: [
        extractSass
    ]
};