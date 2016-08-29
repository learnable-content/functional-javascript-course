var animals = ["cat","dog","fish"];
var total = animals.reduce(function(sum, word) {
  return sum + word.length;
});
console.log(total); // "cat34"
