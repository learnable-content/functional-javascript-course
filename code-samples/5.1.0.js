// on a page with an element like this:
// <button id="clicker">clicker</button>

function proveIt() {
  alert("you triggered " + this.id);
};
document.getElementById("clicker").addEventListener("click", proveIt);
