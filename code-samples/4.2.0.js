var animals = ["cat","dog","fish"];
var lengths = animals.map(function(animal) {
  return animal.length;
});
console.log(lengths); //[3, 3, 4]
