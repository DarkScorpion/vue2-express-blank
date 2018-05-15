
const routes = require('express').Router();

console.log('>> !WARNING! Not check auth of user');
routes.use( (req, res, next) => {
  //if(!req.user) return res.status(403).json({ error: 'not auth' });
  next();
});

routes.get('/user-info', () => { res.send({ status: 'ok' }) });

module.exports = routes;
