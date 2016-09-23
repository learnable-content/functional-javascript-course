const animals = ["cat","dog","fish"];
let letterCount = animals.reduce((sum, item) => sum + item.length);
console.log(letterCount); //"cat34"
