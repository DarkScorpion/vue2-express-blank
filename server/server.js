'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compression = require('compression');

if(process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var wpDevMiddleware = require('webpack-dev-middleware');
  var wpHotMiddleware = require('webpack-hot-middleware');

  var wpConfig = require('@root/webpack.config.js');
  var compiler = webpack(wpConfig);
  app.use( wpDevMiddleware(compiler, {
    stats: { colors: true },
    publicPath: wpConfig.output.publicPath,
  }) );
  app.use( wpHotMiddleware(compiler) );
}

//var indexHtml = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

var apiRoutes = require('./api/index.js');
//var passport = require('./lib/passport.js');

app.disable('x-powered-by'); //disable headers with platform name
app.use( express.static(__dirname + '/../dist/') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
//app.use( require('express-session')(require('@config').session) );
//app.use( passport.initialize() );
//app.use( passport.session() );
//app.use( compression({ threshold: '32 kB' }) );
app.use( require('./lib/logMiddleware.js') );

app.use('/api/v1', apiRoutes);

app.get('/*', (req, res) => {
  //res.send(indexHtml);
  res.sendFile(__dirname + '/index.html');
});

app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;
