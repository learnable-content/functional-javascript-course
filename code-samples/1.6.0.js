document.getElementById("clicker").addEventListener("click", function(e) {
  alert("you triggered " + this.id);
});

const proveIt = function(e) {
  alert("you triggered " + this.id);
}
document.getElementById("clicker").addEventListener("click", proveIt);
