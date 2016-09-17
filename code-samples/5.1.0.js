function proveIt() {
  alert("you triggered " + this.id);
};
document.getElementById("clicker").addEventListener("click", proveIt);


const animals = ["cat","dog","fish"];
let threeLetterAnimals = animals.filter(exactlyThree).map(capitalize).reduce(studlyCaps);
