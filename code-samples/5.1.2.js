function addOne(x) {
  return x + 1;
}
function timesTwo(x) {
  return x * 2;
}
console.log(addOne(timesTwo(3))); //7
console.log(timesTwo(addOne(3))); //8
