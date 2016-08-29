var proveIt = function() {
  alert("you triggered " + this.id);
};
document.getElementById("clicker").addEventListener("click", proveIt);


var animals = ["cat","dog","fish"];
var threeLetterAnimals = animals.filter(exactlyThree).map(capitalize).reduce(studlyCaps);
