const animals = ["cat","dog","fish"];
let total = animals.reduce((sum, word) => sum + word.length, 0);
console.log(total); //10
