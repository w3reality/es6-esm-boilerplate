/* global __dirname, require, module */
// config for webpack 4

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Var2EsmPlugin = require('webpack-var2esm-plugin');

let libraryName = 'my-module'; // pkg.name;
let libraryObjName = 'MyModule'; // name for ES module
let plugins = [], outputFile, minimize;
let isCompat = env.endsWith(':compat');

if (env.startsWith('min')) {
    minimize = true;
    outputFile = `${libraryName}${isCompat ? '.compat' : ''}.min.js`;
    if (0) {
        plugins.push(new BundleAnalyzerPlugin());
    }
} else {
    minimize = false;
    outputFile = `${libraryName}${isCompat ? '.compat' : ''}.js`;
}

plugins.push(new Var2EsmPlugin(libraryObjName, outputFile, isCompat));
const target = 'var';

const config = {
    entry: __dirname + '/src/index.js',
    externals: { // https://webpack.js.org/configuration/externals/
    },
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryObjName,
        libraryTarget: target,
        libraryExport: 'default', // https://github.com/webpack/webpack/commit/de8fc51a6fe2aff3ea3a1c24d34d429897c3b694
        umdNamedDefine: false // must be 'false' for m to be resolved in require([''], (m) => {});
    },
    optimization: {
        minimize: minimize,
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    },
    plugins: plugins
};

module.exports = config;
