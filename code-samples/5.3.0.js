function compose(f1, f2) {
  return function(value) {
    return f1(f2(value));
  };
}
