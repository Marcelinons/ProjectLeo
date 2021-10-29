(function (global){

  //Set up namespace for utility
  var utils = {};

  // Returns HTTP request object
  function getRequestObj() {
    if(window.XMLHttpRequest) {
      return (new XMLHttpRequest());
    }
    else if (window.ActiveXObject) {
      return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else {
      global.alert("Ajax not supported.")
    }
  }

  // Makes Ajax GET request to 'requestUrl'
  utils.sendGetRequest = 
   function(requestUrl, responseHandler) {
    var req = getRequestObj();
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
      }
    };
    req.open("GET", requestUrl, true);
    req.send(null); // for POST mode
  };

  function handleResponse(request, responseHandler) {
    if ((request.readyState == 4) && (request.status == 200)) {
      responseHandler(request.responseText);
    };
  };

global.$ajaxUtils = utils;

})(window);