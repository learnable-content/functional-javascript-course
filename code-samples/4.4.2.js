var animals = ["cat","dog","fish"];
var threeLetterAnimals = animals.filter(exactlyThree);
function exactlyThree(word) {
  return (word.length === 3);
}
console.log(threeLetterAnimals); // ["cat", "dog"]
