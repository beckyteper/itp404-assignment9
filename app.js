require('dotenv').config();
var express = require('express')
var app = express()
var Sequelize = require('sequelize');
var request = require('request');
var newyorktimes = require('./api/newyorktimes');

app.get('/', function (req, res) {
  newyorktimes.listArticles().then(function(articles) {
    res.json(articles);
  });
})
 
app.listen(3000)
