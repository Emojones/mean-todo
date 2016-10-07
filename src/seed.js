'use strict';

var Todo = require('./models/todo.js');

var todos = [
  'feed da dawg',
  'give some hugs out but not in a creepy way',
  'plant a tree'
];

todos.forEach(function(todo, index){
  Todo.find({'name': todo}, function(err, todos){
    if(!err && !todos.length) {
      Todo.create({completed: false, name: todo});
    };
  });
});