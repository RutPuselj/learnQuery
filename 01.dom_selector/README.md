## 1. Simple Selector function

Terms:

* Selector - selects which elements in the DOM to work with.

References:

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors)
* [Minimal sizzle selector](http://sizzlejs.com/)

Description:

* Can select elements based on one of three items:
 	* the given tag name
	* class name
	* or ID

* Should return an array of selected HTML elements

Examples:

```JavaScript
domSelector('#some-id');
domSelector('.some-class');
domSelector('some-tag');
```
