const animals = ["cat","dog","fish"];
let threeLetterAnimalsArray = [];
let threeLetterAnimals;
for (let count = 0; count < animals.length; count++){
  let item = animals[count];
  if (item.length === 3) {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    threeLetterAnimalsArray.push(item);
  }
}
threeLetterAnimals = threeLetterAnimalsArray.join("");
console.log(threeLetterAnimals); // "CatDog"
