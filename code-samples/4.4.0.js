var animals = ["cat","dog","fish"];
var threeLetterAnimals = [];
var count;
for (count = 0; count < animals.length; count++){
  if (animals[count].length === 3) {
    threeLetterAnimals.push(animals[count]);
  }
}
console.log(threeLetterAnimals); // ["cat", "dog"]
