// const { createService } = require('../../services/tasks');

const create = (req, res) => {
  //const response = createService(req.param);
  res.statusCode = 200;
  res.json({success: true});
}

module.exports = create;