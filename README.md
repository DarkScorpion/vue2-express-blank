## Vue2 Express Blank

### Running develop

- Create config.js by blank
- Install modules: npm install
- Start server: npm start

### Running pruduction

- Create config.js by blank
- Set in config.js variable: pm2BuildStatus to "production"
- Install modules: npm install
- Start server: npm run prodStart

### Running using docker-compose

- Copy files to server
- Create config.js by blank
- Set in config.js variable: pm2BuildStatus to "production"
- Install docker and docker-compose, if not installed
- Use command: docker-compose up -d --build

### Structure of config.js
```js
module.exports = {
  port: 8080,
  pm2BuildStatus: 'development', // or 'production'
}
```
