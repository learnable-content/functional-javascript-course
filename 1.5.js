const external = [1, 2, 3];
const impure = value => {
  let result = value + external.length;
  external.push(result);
  return result;
};
console.log(impure(4)); // 7
console.log(impure(4)); // 8
