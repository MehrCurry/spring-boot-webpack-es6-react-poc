var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: '../../../target/classes/static/',
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        preLoaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader'},
            {test: /\.tsx?$/, exclude: /node_modules/, loader: 'tslint-loader'}
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "./src")
                ],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, "./src")
                ],
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    eslint: {
        failOnWarning: false,
        failOnError: true,
        fix: true
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};
