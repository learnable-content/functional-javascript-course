document.getElementById("clicker").addEventListener("click", function() {
  alert("you triggered " + this.id);
});

var proveIt = function() {
  alert("you triggered " + this.id);
};
document.getElementById("clicker").addEventListener("click", proveIt);
