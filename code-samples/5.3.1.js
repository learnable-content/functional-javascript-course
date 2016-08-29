function addOne(x) {
  return x + 1;
}
function timesTwo(x) {
  return x * 2;
}
function compose(f1, f2) {
  return function(value) {
    return f1(f2(value));
  };
}
var addOneTimesTwo = compose(timesTwo, addOne);
console.log(addOneTimesTwo(3)); //8
console.log(addOneTimesTwo(4)); //10
