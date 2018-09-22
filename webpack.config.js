var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()],
    mode: 'development',
<<<<<<< HEAD
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
=======
    entry: path.resolve(__dirname, ".", "index.ts"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "commonjs",
        filename: 'index.js'
>>>>>>> 831d03999d7ddeed5b8e168f02eecfb36d6ad46e
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