'use strict'
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool:'source-map',
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
    devServer: {
        // historyApiFallback: true,
        // noInfo: true,
        contentBase: path.resolve(__dirname,"../dist"),
        // open: true,
        // hot: true,
        // inline: true,
        host: 'localhost',
        // host: '10.10.102.78',
        port: '8888'
        // contentBase: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, "..")
        }),
        new HtmlWebpackPlugin({
            title: "Jun Yong",
            template: path.join(__dirname, "../example/index.html")
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all"
            }
        }
    }
}