    // Create the XHR object.
    function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
          // XHR for Chrome/Firefox/Opera/Safari.
          xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
          // XDomainRequest for IE.
          xhr = new XDomainRequest();
          xhr.open(method, url);
      } else {
          // CORS not supported.
          xhr = null;
      }
      return xhr;
  }


  // Make the actual CORS request.
  function makeCorsRequest() {
      // All HTML5 Rocks properties support CORS.
      var url = 'http://callback.oblax.ru/catalog/view/javascript/widget/view/widget/index.html';

      var xhr = createCORSRequest('post', url);
      if (!xhr) {
          alert('CORS not supported');
          return;
      }

      // Response handlers.
      xhr.onload = function () {
          alert('Response from CORS request to ' + url + ': ');
      };

      xhr.onerror = function () {
          alert('Woops, there was an error making the request.');
      };

      xhr.send();
  }
  makeCorsRequest();