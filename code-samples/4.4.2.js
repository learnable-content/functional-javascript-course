const animals = ["cat","dog","fish"];
const exactlyThree = word => word.length === 3;
let threeLetterAnimals = animals.filter(exactlyThree);
console.log(threeLetterAnimals); // ["cat", "dog"]
