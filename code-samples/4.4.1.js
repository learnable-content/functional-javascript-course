const animals = ["cat","dog","fish"];
let threeLetterAnimals = animals.filter(animal => (animal.length === 3));
console.log(threeLetterAnimals); // ["cat", "dog"]
