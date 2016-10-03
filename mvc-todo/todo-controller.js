var TodoModel = require("./todo-model")
var TodoView = require("./todo-view")

function TodoController () {
  this.model = new TodoModel()
  this.view = new TodoView()

  this.model.on("add", this.view.addTodo.bind(this.view))
  this.model.on("complete", this.view.completeTodo.bind(this.view))

  this.addTestData()
}

module.exports = TodoController

TodoController.prototype = {
  addTestData: function() {
    // Go ahead and simulate interacting with this system.
    var model = this.model

    model.add("Talk about pure functions")
    model.add("Show MVC example")
    model.add("Show functional example")

    setTimeout(function() {
      // Complete the middle todo
      model.complete(1)
    }, 1000)

    setTimeout(function() {
      // Complete the last todo
      model.complete(1)
    }, 2000)

    setTimeout(function() {
      // Complete the first todo
      model.complete(0)
    }, 3000)
  }
}

new TodoController()
