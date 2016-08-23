var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: [ path.join(__dirname, 'app.js') ],
        vendor: ['react', 'react-dom', 'mobx', 'mobx-react', 'react-router']
    },
    output: {
        path: path.join(__dirname, '../server/build'),
        filename: 'client.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
        new webpack.DefinePlugin({
            '__isServer__': false,
            '__isClient__': true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "react", "stage-1"],
                    plugins: ['transform-decorators-legacy']
                }
            }
        ]
    }
};
