const webpack = require( 'webpack' );
const config = require("./webpack.config.js")
const path = require("path")

config.entry = {
    index:      ['babel-polyfill', './index.js'],
    exericise1: ['babel-polyfill', './spec/exercise1.js'],
    exericise2: ['babel-polyfill', './spec/exercise2.js'],
    exericise3: ['babel-polyfill', './spec/exercise3.js'],
    exericise4: ['babel-polyfill', './spec/exercise4.js'],
    exericise5: ['babel-polyfill', './spec/exercise5.js'],
    exericise6: ['babel-polyfill', './spec/exercise6.js'],
    exericise7: ['babel-polyfill', './spec/exercise7.js']
}

config.output = {
    path: path.join(__dirname),
    publicPath: '',
    filename: '[name].bundle.js'
};

module.exports = config;