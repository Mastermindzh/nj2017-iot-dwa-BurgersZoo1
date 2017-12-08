const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT = path.resolve(__dirname, 'src');
const DEST = path.resolve(__dirname, 'dist');

let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(ROOT, 'main.js'),
    output: {
        filename: '[name].js',
        path: DEST
    },
    module: {
        rules: [
            {test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })},
            {test: /\.js$/, use: 'babel-loader'},
            {test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                }), },
            {test: /\.(woff2?|ttf|eot|svg)/, use: 'file-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new ExtractTextPlugin({
            filename: "[name].css",
            allChunks: true
        }),
        new CleanWebpackPlugin(DEST),
        new HtmlWebpackPlugin({
            hash: true,
            title: "Gateway BurgersZoo speurpootjesysteem",
        })
    ],
    resolve: {
        alias: {
            jquery: "jquery/src/jquery",
            "$": "jquery/src/jquery",
        }
    }
};