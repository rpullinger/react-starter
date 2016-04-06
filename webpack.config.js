module.exports = {
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
    }
};
