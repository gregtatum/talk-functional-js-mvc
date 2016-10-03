var updateDOM = require("./render")

// Grab everything individually since these are just independent functions
var addTodo = require("./state").addTodo
var completeTodo = require("./state").completeTodo
var getCompletedTodos = require("./state").getCompletedTodos
var getInitialState = require("./state").getInitialState

// Start adding some initial data
var state = getInitialState()

state = addTodo(state, "Talk about pure functions")
state = addTodo(state, "Show MVC example")
state = addTodo(state, "Show functional example")

updateDOM(state)

setTimeout(function() {
  // Complete the middle todo
  state = completeTodo(state, 1)
  updateDOM(state)
}, 1000)

setTimeout(function() {
  // Complete the last todo
  state = completeTodo(state, 2)
  updateDOM(state)
}, 2000)

setTimeout(function() {
  // Complete the first todo
  state = completeTodo(state, 0)
  updateDOM(state)
}, 3000)
