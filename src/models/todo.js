'use strict'

var mongoose = require('mongoose');

var Todoschema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var model = mongoose.model('Todo', Todoschema);

module.exports = model;