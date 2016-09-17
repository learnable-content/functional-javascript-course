const animals = ["cat","dog","fish"];
const addLength = (sum, word) => sum + word.length;
let total = animals.reduce(addLength, 0);
console.log(total); //10
