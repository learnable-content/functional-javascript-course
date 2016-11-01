const addOne = x => x + 1;
const timesTwo = x => x * 2;
const addOneTimesTwo = x => timesTwo(addOne(holder));
console.log(addOneTimesTwo(3)); //8
console.log(addOneTimesTwo(4)); //10
