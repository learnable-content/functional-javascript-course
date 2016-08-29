var animals = ["cat","dog","fish"];
var lengths = animals.map(getLength);
function getLength(word) {
  return word.length;
}
console.log(lengths); //[3, 3, 4]
