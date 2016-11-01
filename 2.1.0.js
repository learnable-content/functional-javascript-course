const factor = number => {
  let result = 1;
  for (let count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factor(6)); // 720
