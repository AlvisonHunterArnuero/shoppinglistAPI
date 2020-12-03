const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("<h1>Welcome to our shopping list API!</h1>");
});

router.get("/about", (req, res) => {
  res.send("<h3>Hey, Now you are in the about us page, pal!</h3>");
});
router.get("/contact", (req, res) => {
  res.send("<h3>Drop us some lines here, fellow!</h3>");
});
