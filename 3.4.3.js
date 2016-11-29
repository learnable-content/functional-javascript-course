const partial = (variadic, ...args) => {
  return (...subargs) => variadic.apply(this, args.concat(subargs));
};

const greeter = (greeting, separator, emphasis, name) => {
  return (greeting + separator + name + emphasis);
};

const greetHello = partial(greeter, "Hello", ", ", ".");
console.log(greetHello("Heidi"));
