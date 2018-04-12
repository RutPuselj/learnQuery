function ajaxReq(url, options) {
  'use strict';
  
  const httpRequest = new XMLHttpRequest();

  httpRequest.open(options.method, url, true);
  
  // httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        options.success.call(options.context, JSON.parse(httpRequest.responseText), httpRequest.status, httpRequest);
      } else {
        options.failure.call(options.context, httpRequest, httpRequest.status, httpRequest.responseText);
      }
      options.complete.call(options.context, httpRequest, httpRequest.status);

    }
  };

  httpRequest.send();

}
