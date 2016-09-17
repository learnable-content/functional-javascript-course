const compose = (f1, f2) => {
  return value => {
    return f1(f2(value));
  };
};
const addOne = x => x + 1;
const divide = (x, y) => x/y;
const divideAndAdd = compose(addOne, divide);

console.log(divideAndAdd(4,2)); // NaN
