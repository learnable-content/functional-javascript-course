const animals = ["cat","dog","fish"];
const animalsLength = animals.length;
let lengths = [];
for (let count = 0; count < animalsLength; count++){
  lengths.push(animals[count].length);
}
console.log(lengths); //[3, 3, 4]
