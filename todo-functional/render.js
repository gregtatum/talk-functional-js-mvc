var createElement = require("../utils/create-element")
var getTodos = require("./state").getTodos
var getCompleted = require("./state").getCompleted
var elements = require("./elements.js")
var div = elements.div
var span = elements.span
var h1 = elements.h1
var input = elements.input
var swapDomElements = elements.swapDomElements

function renderTodo (text) {
  return (
    div({className: "todo"}, [
      input({type: "checkbox"}),
      span({className: "todo-text" }, [text])
    ])
  )
}

function renderLists (state) {
  return (
    div({className:"todos"}, [
      h1({}, ["Things I need to do"]),
      div({className:"todo-list"},
        getTodos(state).map(renderTodo)
      ),
      div({className: "completed-list"},
        getCompleted(state).map(renderTodo)
      )
    ])
  )
}

function render (state) {
  swapDomElement(renderLists(state), ".todos")
}

module.exports = render
