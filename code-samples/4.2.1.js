const animals = ["cat","dog","fish"];
const getLength = word => word.length;
let lengths = animals.map(getLength);
console.log(lengths); //[3, 3, 4]
