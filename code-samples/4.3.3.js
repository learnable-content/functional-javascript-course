var animals = ["cat","dog","fish"];
var total = animals.reduce(addLength, 0);
function addLength(sum, word) {
  return sum + word.length;
}
console.log(total); //10
