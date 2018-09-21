var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()],
    mode: 'development',
    entry: path.resolve(__dirname, ".", "index.ts"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "commonjs",
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', 'json' ]
    }
};