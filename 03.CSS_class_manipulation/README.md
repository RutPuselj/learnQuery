## 3. CSS class manipulation

Terms:

* CSS class selectors match an element based on the contents of the element's class attribute, one of which must match exactly the class name given

References:

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)

Description:

* Should either add, remove, or toggle a named Class to the matched element(s), or else determine if that element is assigned that named class

Examples:

```JavaScript
cssClass.add(htmlElement, className);
cssClass.remove(htmlElement, className);
cssClass.toggle(htmlElement, className);
cssClass.has(htmlElement, className);
```
