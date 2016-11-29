const factorialPTC = number => factorIt(number, 1);

const factorIt = (number, accumulator) => {
  if (number <= 1) {
    return accumulator;
  }
  return factorIt(number -1, number * accumulator);
};

console.log(factorialPTC(6)); //720
