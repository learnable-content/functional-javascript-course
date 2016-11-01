const factorial = number => {
  if (number <= 0) {
    return 1;
  }
  return (number * factorial(number - 1));
}

console.log(factorial(6)); // 720
