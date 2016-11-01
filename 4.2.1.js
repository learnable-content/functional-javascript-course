const animals = ["cat","dog","fish"];
const getLength = item => item.length;
let letterCounts = animals.map(getLength);
console.log(letterCounts); //[3, 3, 4]
