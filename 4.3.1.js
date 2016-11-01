const animals = ["cat","dog","fish"];
let letterCount = animals.reduce((sum, item) => sum + item.length, 0);
console.log(letterCount); //10
