function getInitialState () {
  return {
    id: 0,
    todos: [],
    completed: []
  }
}

function addTodo (state, text) {
  var nextId = state.id++

  return Object.assign({}, state, {
    id: nextId,
    // Create a new copy of todos with the text at the end
    todos: state.todos.concat(text)
  })
}

function completeTodo (state, index) {
  var todo = state.todos[index]

  // Create a new copy of completed, with the completed todo at the end.
  var newCompleted = state.completed.concat(todo)

  return Object.assign({}, state, {
    completed: newCompleted
  })
}

function getTodos (state) {
  return state.todos.filter(function(todo) {
    return !state.completed.includes(todo)
  })
}

function getCompleted (state) {
  return state.completed
}

module.exports = {
  getInitialState: getInitialState,
  addTodo: addTodo,
  completeTodo: completeTodo,
  getTodos: getTodos,
  getCompleted: getCompleted,
}
