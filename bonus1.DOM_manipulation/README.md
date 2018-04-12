## Bonus 1. DOM manipulation

Terms:

* "The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document (a tree) and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content."

References:

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/)Document_Object_Model

Description:

* Should manipulate the DOM in the specified manner:
	* remove an element
	* append an element to the DOM
	* insert an element in the DOM after a specified element
	* insert an element in the DOM before a specified element
	* get the value of a selected element

Examples:

```JavaScript
dom.remove(element);
dom.append(targetElement, element);
dom.after(targetElement, element);
dom.prepend(targetElement, element);
dom.before(targetElement, element);
dom.val(targetElement);
```
