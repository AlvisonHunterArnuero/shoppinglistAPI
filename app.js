/* eslint-disable no-console */
// The import of the express module goes first
const express = require('express');

// Routes to be used on the app
const routes = require('./routes');

// Now I will declare an instance of express for my app
const app = express();

// declare the port that I will use on this app
const port = process.env.PORT || 8080;

// I need to declare 2 methods for handling http encoded url and json objects
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', './views');

app.locals.title = 'You are currently on: ';
app.locals.menu =
  "<a href='/'>HOME</a> | <a href='/about'>ABOUT US</a> | <a href='/contact'>GET IN CONTACT</a>";

routes(app);
// We are going to se a listener for the server to trace changes
app.listen(port, () => {
  console.log(`Express server is listening at http://localhost:${port}`);
});
// last but not least, let us export the app
module.exports = app;

// const MongoClient = require('mongodb').MongoClient;
// const uri =
//   'mongodb+srv://ahuntera2020:<password>@cluster0.yqjb8.mongodb.net/<dbname>?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err) => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });
