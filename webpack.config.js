'use strict';

const isProd = (process.env.NODE_ENV === 'production');

let config = {
    entry: './app/main.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        noParse: [
            /node_modules\/sinon\//,
        ],
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }, {
            test: /\.json$/,
            exclude: /(node_modules)/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        alias: {
            'sinon': 'sinon/pkg/sinon'
        }
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
    },
    devServer: {
        historyApiFallback: true
    }
};


module.exports = config;
