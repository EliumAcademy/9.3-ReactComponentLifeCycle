const webpack = require( 'webpack' );
const config = require("./webpack.config.js")


const WebpackJasmineHtmlRunnerPlugin = require(
   'webpack-jasmine-html-runner-plugin'
);

// In this example, your spec-runners are named
// e.g. 'lib/some-module/spec/spec-runner.js'.
// Pass more string arguments to process additional files.
config.entry = WebpackJasmineHtmlRunnerPlugin.entry(
   './spec/*.js'
);

config.output = {
   path: './spec/',
   publicPath: '/spec/',
   filename: '[name].bundle.js'
};

config.plugins = [
   new webpack.SourceMapDevToolPlugin( {
      filename: '[name].bundle.js.map'
   } ),
   new WebpackJasmineHtmlRunnerPlugin( {
      fixupScripts: []
   } )
];



module.exports = config;