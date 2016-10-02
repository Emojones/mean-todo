'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err){
  if(err){
    console.log('Failed connecting to Monodb');
  } else {
    console.log('Connected to MongoDb');
  }
});