//The import of the express module goes first
const express = require("express");
//Now I will declare an instance of express for my app
const app = express();
// declare the port that I will use on this app
const port = process.env.PORT || 8080;
// I need to declare 2 methods for handling http encoded url and json objects
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Here I will declare the views that I will use on this app
const home = require("./views/home");
const about = require("./views/about");
const contactus = require("./views/contact");

// Time to use those views with their respective route
app.use("/", home);
app.use("/about", about);
app.use("/contact", contactus);

app.locals.title = "You are currently on: ";
app.locals.menu =
  "<a href='/'>HOME</a> | <a href='/about'>ABOUT US</a> | <a href='/contact'>GET IN CONTACT</a>";

// We are going to se a listener for the server to trace changes
app.listen(port, function () {
  console.log(`Express server is listening at http://localhost:${port}`);
});
// last but not least, let us export the app
module.exports = app;
