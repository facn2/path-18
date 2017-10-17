const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Careers = require('../database/career_model');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/careers', (req, res) => {
  Careers.find({}, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});


module.exports = app;
