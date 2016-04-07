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
            query: {
                presets: ['es2015', 'react', 'react-hmre']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    devServer: {
        historyApiFallback: true
    }
};

// Remove hot reload for prod and testing
if (isProd) {
    config.module.loaders[0].query.presets = ['es2015', 'react'];
}

module.exports = config;
