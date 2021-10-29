$(function () {
  $("#navToggler").blur(function(event) {
    var scWidth = window.innerWidth;
    if (scWidth < 768) {
      $("#navbar-buttons").collapse('hide');
    }
  });
});

(function (global) {

  var dc = {};
  var RegSampleUrl = "index.html";
  var UpdateUrl = "snippets/update-snippet.html"

  // Function to insert innerHTML on the selected element
  var insertHTML = function (selector, html) {
    var elem = document.querySelector(selector);
    elem.insertHTML = html;
  };

  var switchRegisterToActive = function () {
    var classes = document.querySelector("#reg_sample").className;
    classes = classes.replace(new RegExp("active", "g"), "");
    document.querySelector("#reg_sample").className = classes;

    // Add 'active' to the button if not already there
    classes = document.querySelector("#reg_sample").className;
    if (classes.indexOf("active") === -1) {
      classes += " active";
      document.querySelector("#reg_sample").className = classes;
    }
  };

  var switchUpdateToActive = function () {
    var classes = document.querySelector("#update_sample").className;
    classes = classes.replace(new RegExp("active", "g"), "");
    document.querySelector("#update_sample").className = classes;

    // Add 'active' to the button if not already there
    classes = document.querySelector("#update_sample").className;
    if (classes.indexOf("active") === -1) {
      classes += " active";
      document.querySelector("#update_sample").className = classes;
    }
  };

function buildAndShowUpdateSample() {
  $ajaxUtils.sendGetRequest (
    UpdateUrl,
    function () {
      switchUpdateToActive();
      var htmlToBeInserted = "<div class='row'><section><p>Aids</p></section></div>"
      insertHTML("#content", htmlToBeInserted)
    },
    false);
}

dc.showUpdateMenu = function () {
  buildAndShowUpdateSample;
};

global.$dc = dc;

})(window);