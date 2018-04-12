var cssClass = (function () {
  'use strict';

  // Constructor
  var cssClass = function (htmlElement, className) {
    this.htmlElement = htmlElement;
    this.className = className;
  };

  // Add a named Class to matched HTML element
  cssClass.add = function (htmlElement, className) {
    if (htmlElement.getAttribute('id')) {
      if (htmlElement.getAttribute('class')) {
        var element = document.querySelector('#' + htmlElement.id).classList.add(className);
      } else {
        var element2 = document.querySelector('#' + htmlElement.id).setAttribute('class', className);
      }
    }
  };

  // Remove a named Class from HTML element
  cssClass.remove = function (htmlElement, className) {
    if (htmlElement.getAttribute('id')) {
      var element = document.querySelector('#' + htmlElement.id).classList.remove(className);
    }
  };

  // Toggle a named Class to matched HTML element
  cssClass.toggle = function (htmlElement, className) {
    if (htmlElement.getAttribute('id')) {
      var element = document.querySelector('#' + htmlElement.id).classList.toggle(className);
    }
  };

  // Check if HTML element has named Class
  cssClass.has = function (htmlElement, className) {
    if (htmlElement.getAttribute('id')) {
      if (document.querySelector('#' + htmlElement.id).classList.contains(className)) {
        return true;
      } else
        return false;
    }
  };

  return cssClass;
})();