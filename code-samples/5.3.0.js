const compose = (f1, f2) => {
  return value => {
    return f1(f2(value));
  };
};

// const compose = (f1, f2) => value => f1(f2(value));
