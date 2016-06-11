var path = require('path');
var webpack = require('webpack');


var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './client.js',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    presets: ['react-hmre', 'react', 'es2015', 'stage-0']
                  }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
            { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
            { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
            { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" }
        ]
    }
};

module.exports = config;