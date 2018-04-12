var domSelector = function(selectors) {
  'use strict';


  // In case of invalid selector
  if (selectors.search(/[^a-z-.#]/) > -1) {
    throw Error();
  }

  // Selects a DOM element with given tag or class name
  if (selectors.search(/[a-z-]/) > -1 || selectors.charAt(0) === '.') {
    return Array.prototype.slice.call(document.querySelectorAll(selectors));
  }

  // Selects a DOM element with given ID
  if (selectors.charAt(0) === '#') {
    return Array.prototype.slice.call(document.querySelector(selectors));
  }

  // If the element does not exists in DOM, return empty array
};
