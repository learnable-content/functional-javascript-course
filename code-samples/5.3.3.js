var addOne = x => x + 1;
var timesTwo = x => x * 2;
var addOneTimesTwo = x => timesTwo(addOne(x));
console.log(addOneTimesTwo(3)); //8
console.log(addOneTimesTwo(4)); //10
