const animals = ["cat","dog","fish"];
const exactlyThree = word => word.length === 3;
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
const mergeWords = (words, word) => words + word;
let threeLetterAnimals = animals.filter(exactlyThree).map(capitalize).reduce(mergeWords);
console.log(threeLetterAnimals); // "CatDog"
