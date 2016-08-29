function addOne(x) {
  return x + 1;
}
function timesTwo(x) {
  return x * 2;
}
function addOneTimesTwo(x) {
  return(addOne(timesTwo(x)));
}
console.log(addOneTimesTwo(3)); //8
console.log(addOneTimesTwo(4)); //10
