const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'production',
    entry: './src/$.ts',
    devtool: 'source-map',
    output: {
        library: '$',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                sourceMap: true,
            },
            parallel: true,
        })],
    },
    stats: {
        modules: true,
        children: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            sourceType: 'unambiguous'
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        /*new BundleAnalyzerPlugin(),*/
    ],
};