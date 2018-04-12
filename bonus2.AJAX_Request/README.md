## Bonus 2. Ajax request function

Terms:

* Ajax stands for Asynchronous JavaScript and XML. It is a model, combining multiple technologies so web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page
* All data is sent as JSON

References:

* [Mozilla Developer Network](https://developer.mozilla.org/en/docs/AJAX)

Description:

* should make a successful Ajax request and post
* should call a custom function on either success or failure (with a custom context)
* should call a custom function when a request is completed (with a custom context)

Examples:

```JavaScript
ajaxReq(url, options);

ajaxReq(url, {
  method: 'POST',
  data: {},
  context: this,
  failure: function() {},
  success: function() {},
  complete: function() {}
});
```
