const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jpg'],
    },
    devtool: 'inline-source-map',
    devServer: {
        static:'../dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    watch: true,
    module: {
        rules:[
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: 'file-loader',
            },
            { 
                test:/\.ts/i,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader' 
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            title: 'Development',
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: '**/*',
                context: path.resolve(__dirname, '../src', 'assets'),
                to: './assets',
              },
            ],
          }),
    ] 
};