const animals = ["cat","dog","fish"];
const animalsLength = animals.length;
let total = 0;
for (let count = 0; count < animalsLength; count++){
  total += animals[count].length;
}
console.log(total); //10
