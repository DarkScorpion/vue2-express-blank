
const config = require('./config');
const buildStatus = config.pm2BuildStatus || 'development';

module.exports = {
  apps : [{
    name: 'front',
    script: './server/app.js',
    log_date_format : 'YYYY-MM-DD HH:mm:ss',
    env: {
      NODE_ENV: buildStatus
    },
  }]
};
