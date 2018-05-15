'use strict'
require('dotenv').config();

const express = require("express");
const MongoClient = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
const port = 8000

mongoose.connect('mongodb://localhost/notes')
  .then(()=> console.log('connected to mongodb'))
  .catch(err => console.log('error in connection to mongodb', err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//creates the router
router.get('/', (req, res) => {
  res.send('Hello, World!');
});



//use the router into /api
app.use('/api', router);


app.listen(port, () => {
  console.log(`listening to port + ${port}`)
})

