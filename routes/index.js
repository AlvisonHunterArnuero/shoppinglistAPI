const { home, about, contact } = require('../views/index.js');

const routes = (app) => {
  app.get('/', home);
  app.get('/about', about);
  app.get('/contact', contact);
};

module.exports = routes;

