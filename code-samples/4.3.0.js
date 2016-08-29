var animals = ["cat","dog","fish"];
var total = 0;
var count;
for (count = 0; count < animals.length; count++){
  total += animals[count].length;
}
console.log(total); //10
