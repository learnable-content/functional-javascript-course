const addOne = x => x + 1;
const timesTwo = x => x * 2;

const addOneTimesTwo = x => {
  let holder = x;
  holder = addOne(holder);
  holder = timesTwo(holder);
  return holder;
};

console.log(addOneTimesTwo(3)); //8
console.log(addOneTimesTwo(4)); //10

const timesTwoAddOne = x => {
  let holder = x;
  holder = timesTwo(holder);
  holder = addOne(holder);
  return holder;
};

console.log(timesTwoAddOne(3)); //7
console.log(timesTwoAddOne(4)); //9
