var webpack = require('webpack');
var path = require('path'); //webpack requires absolut path

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    }
};
