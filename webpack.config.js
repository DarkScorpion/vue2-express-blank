
var wpMerge = require('webpack-merge');

var common = require('./webpack/common.js');
var develop = require('./webpack/develop.js');
var production = require('./webpack/production.js');

var buildType = process.env.NODE_ENV;

module.exports = (buildType === 'production') ? wpMerge(common, production) : wpMerge(common, develop);
