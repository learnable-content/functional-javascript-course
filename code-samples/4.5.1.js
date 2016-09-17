const animals = ["cat","dog","fish"];
const exactlyThree = word => word.length === 3;
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
const getStudlyCaps = words => {
  let threeLetters = words.filter(exactlyThree);
  let capitalized = threeLetters.map(capitalize);
  let merged = capitalized.join("");
  return merged;
}
console.log(getStudlyCaps(animals)); // "CatDog"
