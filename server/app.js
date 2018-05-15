'use strict'

require('module-alias/register');
var config = require('@config');
var server = require('./server.js');

var s1 = server.listen(config.port, () => {
  console.log( 'Server start on port: %s', s1.address().port );
});

