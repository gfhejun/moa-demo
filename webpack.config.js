var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client',
        './js/home/Router.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'js')
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                include: path.join(__dirname, 'css')
            },
            {
                test: /\.png$/,
                loader: 'url?limit=8192',
                include: path.join(__dirname, 'img')
            }
        ]
    }
};