const { tasks } = require('../controllers');

const routes = (app) => {
  //app.get('/api/tasks', controllers.tasks.all); // all
  app.post('/api/tasks', tasks.create); // create
  //app.put('/api/tasks', controllers.tasks.update); // update
  //app.delete('/api/tasks', controllers.tasks.delete); // delete
  //app.get('/api/tasks/:id', controllers.tasks.find); // find
};

module.exports = routes;

