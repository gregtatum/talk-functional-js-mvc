function createElement (name, attributes, children) {
  // Create the element.
  var element = document.createElement(name)
  addAttributes(element, attributes)
  addChildren(element, children)
  return element
}

function addChildren (element, children) {
  // Add the children if they exist
  if (children) {
    children.forEach(function(child) {
      // Add either text nodes, or assume we have been given a DOM node.
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child))
      } else if (child instanceof HTMLElement) {
        element.appendChild(child)
      }
    })
  }
}

function addAttributes (element, attributes) {
  // Add any passed in attributes. You could add more features here.
  if (!attributes) {
    throw new Error("Elements require an attribute")
  }
  if (attributes.className) {
    element.className = attributes.className
  }
  if (attributes.id) {
    element.id = attributes.id || ""
  }
  if (attributes.type) {
    element.setAttribute("type", attributes.type)
  }
}

function swapDomElement(element, selector) {
  var previousElement = document.querySelector(selector)
  if (previousElement) {
    previousElement.remove()
  }
  document.body.appendChild(element)
}

function div (attributes, children) {
  return createElement ("div", attributes, children)
}

function span (attributes, children) {
  return createElement ("span", attributes, children)
}

function input (attributes, children) {
  return createElement ("input", attributes, children)
}

function h1 (attributes, children) {
  return createElement ("h1", attributes, children)
}

module.exports = {
  createElement: createElement,
  div: div,
  span: span,
  input: input,
  h1: h1,
}
