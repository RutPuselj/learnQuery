## 2. CSS manipulation

Terms:

* CSS (cascading style sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML

References:

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS)

Description:

* Should be able to set/change single or multiple CSS property values for selected elements, and also get the value of any existing CSS property

Examples:

```JavaScript
// set single property
cssProp(htmlElement, cssProperty, value);

// set multiple properties
cssProp(htmlElement, {cssProperty: value, cssProperty: value});

// get CSS property value
cssProp(htmlElement, cssProperty);
```
