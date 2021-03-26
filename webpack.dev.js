const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'build', 'dist'),
        compress: true,
        port: 3000,
        hot: true
    },
    devtool: 'source-map'
});
