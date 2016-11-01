const animals = ["cat","dog","fish"];
const exactlyThree = item => item.length === 3;
let threeLetterAnimals = animals.filter(exactlyThree);
console.log(threeLetterAnimals); // ["cat", "dog"]
