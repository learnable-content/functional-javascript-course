const animals = ["cat","dog","fish"];
const addLength = (sum, item) => sum + item.length;
let letterCount = animals.reduce(addLength, 0);
console.log(letterCount); //10
