var createElement = require("../utils/create-element")

function TodoView () {
  this.createContainer()
}

module.exports = TodoView

TodoView.prototype = {

  createContainer: function() {
      // Set the inner html to the template
    this.container = createElement(`
      <div class="todos">
        <h1>Things I need to do:</h1>
        <div class="todo-list"></div>
        <div class="completed-list"></div>
      </div>
    `)

    // Add our container
    document.body.appendChild(this.container)

    this.todoList = document.querySelector(".todo-list")
    this.completedList = document.querySelector(".completed-list")
  },

  addTodo: function(todo) {
    var element = createElement(`
      <div class="todo" id="todo-${todo.id}">
        <input type="checkbox" />
        <span class="todo-text">${todo.text}</span>
      </div>
    `)

    this.todoList.appendChild(element)

    return element
  },

  completeTodo: function(todo) {
    // Grab the DOM element by ID.
    var element = document.querySelector("#todo-" + todo.id)
    element.remove()
    this.completedList.appendChild(element)
  }
}
