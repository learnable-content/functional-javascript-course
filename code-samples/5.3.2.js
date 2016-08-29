var addOneTimesTwo = compose(timesTwo, addOne);
console.log(addOneTimesTwo(3)); //8
console.log(addOneTimesTwo(4)); //10
var timesTwoAddOne = compose(addOne, timesTwo);
console.log(timesTwoAddOne(3)); //7
console.log(timesTwoAddOne(4)); //9
