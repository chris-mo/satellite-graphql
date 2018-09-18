var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()],
    mode: 'development',
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
};