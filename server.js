import express from "express";
import MongoClient from "mongodb";
import bodyParser from "body-parser";

const app = express();

const port = 8000

app.listen(port, () =>{
  console.log(`listening to port + ${port}`)
})

