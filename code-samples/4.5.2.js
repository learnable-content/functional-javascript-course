var animals = ["cat","dog","fish"];
var threeLetterAnimals = animals.filter(exactlyThree).map(capitalize).reduce(studlyCaps);

function studlyCaps(words, word) {
  return words + word;
}
function exactlyThree(word) {
  return (word.length === 3);
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(threeLetterAnimals); // "CatDog"
