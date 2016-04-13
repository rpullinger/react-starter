'use strict';

const isProd = (process.env.NODE_ENV === 'production');

let config = {
    entry: './app/main.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    devServer: {
        historyApiFallback: true
    }
};

module.exports = config;
