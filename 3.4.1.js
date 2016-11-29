function greeter(greeting, separator, emphasis, name) {
  return (greeting + separator + name + emphasis);
}
const greetHello = partial(greeter, "Hello", ", ", ".");
console.log(greetHello("Heidi")); //"Hello, Heidi."
console.log(greetHello("Eddie")); //"Hello, Eddie."
