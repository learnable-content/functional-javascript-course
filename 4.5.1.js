const animals = ["cat","dog","fish"];
const exactlyThree = word => word.length === 3;
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
const mergeWords = (words, word) => words + word;
const getStudlyCaps = words => {
  let threeLetters = words.filter(exactlyThree);
  let capitalized = threeLetters.map(capitalize);
  let merged = capitalized.reduce(mergeWords);
  return merged;
}
console.log(getStudlyCaps(animals)); // "CatDog"
