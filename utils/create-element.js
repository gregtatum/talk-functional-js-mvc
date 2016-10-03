/**
 * Returns an element from text.
 */
module.exports = function template(text) {
  var element = document.createElement('template')
  element.innerHTML = text
  return element.content.firstElementChild
}
