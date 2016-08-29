var animals = ["cat","dog","fish"];
var lengths = [];
var count;
var loops = animals.length;
for (count = 0; count < loops; count++){
  lengths.push(animals[count].length);
}
console.log(lengths); //[3, 3, 4]
