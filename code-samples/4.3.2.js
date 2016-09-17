const animals = ["cat","dog","fish"];
let total = animals.reduce((sum, word) => sum + word.length);
console.log(total); //"cat34"
