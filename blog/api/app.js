'use strict';
var express = require('express');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

import mongoose from 'mongoose';
import config from './config';
import routes from './REST/routes';
import morgan from 'morgan';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('../public'));


mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true}, (error) => {
  if (error) {
    console.log("Wystąpił błąd");
      console.error(error);
  }
  else {
      console.log('Connect with database established');
  }
});
process.on('SIGINT', () => {
  mongoose.connection.close(function () {
      console.error('Mongoose default connection disconnected through app termination');
      process.exit(0);
  });
});


/* 
app.get('/api/posts', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("blog");
    dbo.collection("blog").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  }); 

  
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  res.send(post);
});

app.post('/api/posts', (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.name,
    text: req.body.text
  };
  posts.push(post);
  res.send(post);
});

app.put('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  post.title = req.body.title;
  post.text = req.body.text;
  res.send(post);
});

app.delete('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  const index = posts.indexOf(posts);
  posts.splice(index, 1, null);
  res.send(post);
}); */



routes(app);
app.listen(config.port, () => {
    console.info(`Server is running at ${config.port}`)
 });
