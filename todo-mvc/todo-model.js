var util = require('util')
var EventEmitter = require('events').EventEmitter

// Create a new model to hold our data.
function TodosModel() {
  // Inherit from EventEmitter.
  EventEmitter.call(this)
  this._id = 0
  this._todos = []
  this._completed = []
}

util.inherits(TodosModel, EventEmitter)

// Define our model's methods
TodosModel.prototype.add = function(text) {
  // Create a todo with text and an ID. In a bigger app Todo might its own model.
  var todo = {
    text: text,
    id: this._id++
  }

  this._todos.push(todo)
  this.emit("add", todo)
},

TodosModel.prototype.getTodos = function() {
  // Return a copy of our internal todos.
  return this._todos.slice(0)
},

TodosModel.prototype.getCompletedTodos = function() {
  // Return a copy of our internal todos.
  return this._completed.slice(0)
},

TodosModel.prototype.complete = function(index) {
  // Remove it out of the _todos list.
  var completedTodo = this._todos[index]
  this._todos.splice(index, 1)

  // Add it to the completed.
  this._completed.push(completedTodo)

  // Tell anyone who cares that a todo was completed.
  this.emit("complete", completedTodo)
}

module.exports = TodosModel
