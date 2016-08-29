var factor = function(number) {
  var result = 1;
  var count = number;
  while(count > 1) {
    result *= count;
    count--
  }
  return result;
};
console.log(factor(6)); // 720
