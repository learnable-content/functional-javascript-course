const addOne = x => x + 1;
const timesTwo = x => x * 2;

const compose = (f1, f2) => {
  return value => {
    return f1(f2(value));
  };
};

const addOneTimesTwo = compose(timesTwo, addOne);
console.log(addOneTimesTwo(3)); //8
console.log(addOneTimesTwo(4)); //10
