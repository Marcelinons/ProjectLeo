function showUpdateMenu() {
  var xhttp = new XMLHttpRequest;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.stats == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "snippets/update-snippet.html", true);
  xhttp.send();
};