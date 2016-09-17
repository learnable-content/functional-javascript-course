const factor = number => {
  let result = 1;
  let count = number;
  while(count > 1) {
    result *= count;
    count--
  }
  return result;
};
console.log(factor(6)); // 720
