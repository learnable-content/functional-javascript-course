var external = [1, 2, 3];
function impure(value) {
  var result = value + external.length;
  external.push(result);
  return result;
}
console.log(impure(4)); // 7
console.log(impure(4)); // 8
