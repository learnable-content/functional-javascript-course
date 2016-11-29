const partial = (variadic, ...args) => {
  return (...subargs) => variadic.apply(this, args.concat(subargs));
};
