var animals = ["cat","dog","fish"];
function exactlyThree(word) {
  return (word.length === 3);
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function getStudlyCaps(words) {
  var threeLetters = words.filter(exactlyThree);
  var capitalized = threeLetters.map(capitalize);
  var merged = capitalized.join("");
  return merged;
}
console.log(getStudlyCaps(animals)); // "CatDog"
