const animals = ["cat","dog","fish"];
const animalsLength = animals.length;
let threeLetterAnimals = [];
for (let count = 0; count < animalsLength; count++){
  if (animals[count].length === 3) {
    threeLetterAnimals.push(animals[count]);
  }
}
console.log(threeLetterAnimals); // ["cat", "dog"]
