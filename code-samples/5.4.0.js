function compose(f1, f2) {
  return function(value) {
    return f1(f2(value));
  };
}
function addOne(x) {
  return x + 1;
}
function divide(x, y) {
  return x / y;
}
var divideAndAdd = compose(addOne, divide);
console.log(divideAndAdd(4,2)); // 3
