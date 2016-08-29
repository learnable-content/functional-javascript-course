function addOne(x) {
  return x + 1;
}
function timesTwo(x) {
  return x * 2;
}
function addOneTimesTwo(x) {
  var holder = x;
  holder = addOne(holder);
  holder = timesTwo(holder);
  return holder;
}
console.log(addOneTimesTwo(3)); //8
console.log(addOneTimesTwo(4)); //10
