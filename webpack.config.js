/**
 * Created by kevin.chen on 7/10/17.
 */

const path = require('path');

module.exports = {
    entry: {
        js: './src/client.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            }
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 3000
    }
};
