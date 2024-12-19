const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'head',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/img', to: 'img' },
                { from: 'src/components/', to: 'components' },
                { from: 'src/fonts', to: 'fonts' },
                { from: 'src/css', to: 'css' },
            ],
        }),

    ],
    mode: 'development',
    devtool: 'source-map',
};
