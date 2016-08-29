var animals = ["cat","dog","fish"];
var total = animals.reduce(function(sum, word) {
  return sum + word.length;
}, 0);
console.log(total); //10
