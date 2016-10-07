'use strict';

var express = require('express');
var Todo = require('../models/todo');

var router = express.Router();

router.get('/todos', function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      //do something
      return res.status(500).json({message: err.message});
    }
    res.json({
      todos: todos
    });
    //var todos = require('../../mock/todo.json');
  });
});

//TODO: add POST route to create new entries
//TODO: add PUT route to update existing entries
//TODOL add DELETE route to delete entries

module.exports = router;