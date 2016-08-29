var animals = ["cat","dog","fish"];
var threeLetterAnimalsArray = [];
var threeLetterAnimals;
var item;
var count;
for (count = 0; count < animals.length; count++){
  item = animals[count];
  if (item.length === 3) {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    threeLetterAnimalsArray.push(item);
  }
}
threeLetterAnimals = threeLetterAnimalsArray.join("");
console.log(threeLetterAnimals); // "CatDog"
