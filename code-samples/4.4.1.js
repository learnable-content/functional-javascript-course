var animals = ["cat","dog","fish"];
var threeLetterAnimals = animals.filter(function(animal) {
  return (animal.length === 3);
});
console.log(threeLetterAnimals); // ["cat", "dog"]
