const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Mongo
const dbURI = 'mongodb+srv://gestyongo:aA6E3YjlZ3dGR7B7@gestyondb.m61bplj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    app.listen(5001, () => {
      console.log('Server is running on port 5001');
    });
  })
  .catch(err => console.log(err));

app.use(express.json());
