var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
  const title = req.app.locals.title;
  const menu = req.app.locals.menu;
  const content = "<p>Hey, drop us some lines here, fellow!</p>";
  res.send(
    `<strong>${title} <i>${req.originalUrl}.</i></strong><hr /> ${content} ${menu}`
  );
});
module.exports = router;
