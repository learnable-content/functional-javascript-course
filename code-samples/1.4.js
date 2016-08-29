(function() {
  "use strict";
  var capify = function(str) {
    return [str.charAt(0).toUpperCase(), str.substring(1)].join("");
  };
  var processWords = function(fn, str) {
    return str.split(" ").map(fn).join(" ");
  };
  document.getElementById("main_button").addEventListener("click", function(e) {
    var something = prompt("Give me something to capitalize");
    alert(processWords(capify, something));
  });
}());
