function cssProp() {
  'use strict';

  var args = Array.prototype.slice.call(arguments);

  var htmlElement = args[0];
  var cssProperty = args[1];
  var value = args[2];
  var newProps = '';

  // Get CSS property value
  if (args.length === 2 && typeof cssProperty === 'string') {
    var style = window.getComputedStyle(htmlElement);
    return style.getPropertyValue(cssProperty);
  }

  // Set a CSS attribute
  if (args.length === 3) {
      htmlElement.setAttribute('style', cssProperty + ':' + value + ';');
  }

  // Set multiple CSS properties
  if (args.length === 2 && typeof cssProperty === 'object') {
    var multiPropsElement = document.querySelector('#' + htmlElement.id);
    for (var property in cssProperty) {
      if (cssProperty.hasOwnProperty(property)) {
        newProps += property + ':' + cssProperty[property] + ';';
      }
    }
    multiPropsElement.setAttribute('style', newProps);
  }

}