const compose = (f1, f2) => {
  return () => {
    return f1.call(this, f2.apply(this, arguments));
  };
};
const addOne = x => x + 1;
const timesTwo = x => x * 2;
const divideAndAdd = compose(addOne, divide);
console.log(divideAndAdd(4,2)); // 3
