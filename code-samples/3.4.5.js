function curryIt(uncurried, ...args) {
  return function(...subargs) {
    return uncurried.apply(this, args.concat(subargs));
  }
}

function greeter(greeting, separator, emphasis, name) {
  return (greeting + separator + name + emphasis);
}
var greetHello = curryIt(greeter, "Hello", ", ", ".");
console.log(greetHello("Heidi")); //"Hello, Heidi."
console.log(greetHello("Eddie")); //"Hello, Eddie."

var greetGoodbye = curryIt(greeter, "Goodbye", ", ");
console.log(greetGoodbye(".", "Joe")); //"Goodbye, Joe."
