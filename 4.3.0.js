const animals = ["cat","dog","fish"];
const animalsLength = animals.length;
let letterCount = 0;
for (let count = 0; count < animalsLength; count++){
  letterCount += animals[count].length;
}
console.log(letterCount); //10
