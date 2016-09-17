const animals = ["cat","dog","fish"];
const mergeWords = (words, word) => words + word;
const exactlyThree = word => word.length === 3;
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
let threeLetterAnimals = animals.filter(exactlyThree).map(capitalize).reduce(mergeWords);
console.log(threeLetterAnimals); // "CatDog"
