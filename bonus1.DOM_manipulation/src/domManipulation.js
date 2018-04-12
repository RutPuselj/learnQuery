var dom = (function() {

  return {
    remove: function(element) {
      element.remove(element);
    },
    append: function(targetElement, element) {
      targetElement.append(element);
    },
    after: function(targetElement, element) {
      targetElement.after(element);
    },
    prepend: function(targetElement, element) {
      targetElement.prepend(element);
    },
    before: function(targetElement, element) {
      targetElement.before(element);
    },
    val: function(targetElement) {
      return targetElement.value;
    }
  };

})();

/* var dom = (function () {
  'use strict';

  // Constructor
  var dom = function (targetElement, element) {
    this.element = element;
    this.targetElement = targetElement;
  };

  dom.remove = function (element) {
    element.remove();
  };

  dom.append = function (targetElement, element) {
    targetElement.append(element);
  };

  dom.after = function (targetElement, element) {
    targetElement.after(element);
  };

  dom.prepend = function (targetElement, element) {
    targetElement.prepend(element);
  };

  dom.before = function (targetElement, element) {
    targetElement.before(element);
  };

  dom.val = function (targetElement) {
    return targetElement.value;
  };

  return dom;
})(); */
