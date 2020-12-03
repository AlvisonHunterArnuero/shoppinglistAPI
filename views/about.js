var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
  const title = req.app.locals.title;
  const menu = req.app.locals.menu;
  const content = "<p>Hey, Now you are in the about us page, pal!</p>";
  res.send(
    `<strong>${title} <i>${req.originalUrl}.</i></strong><hr /> ${content} ${menu}`
  );
});
module.exports = router;