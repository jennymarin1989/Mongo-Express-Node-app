'use strict'
require('dotenv').config();

const express = require("express");
const MongoClient = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
const port = 8000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', router);


app.listen(port, () => {
  console.log(`listening to port + ${port}`)
})

