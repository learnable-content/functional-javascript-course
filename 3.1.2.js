function greet(greeting, name) {
  return (`${greeting}, ${name}`);
}
console.log(greet("Hello", "Heidi")); //"Hello, Heidi"
console.log(greet("Hello", "Eddie")); //"Hello, Eddie"
console.log(greet("Hello", "Barbara")); //"Hello, Barbara"

function greetHello(name) {
  return (`Hello, ${name}`);
}
console.log(greetHello("Heidi")); //"Hello, Heidi"
console.log(greetHello("Eddie")); //"Hello, Eddie"
console.log(greetHello("Barbara")); //"Hello, Barbara"

function greetHi(name) {
  return (`Hi, ${name}`);
}
console.log(greetHi("Heidi")); //"Hi, Heidi"
console.log(greetHi("Eddie")); //"Hi, Eddie"
console.log(greetHi("Barbara")); //"Hi, Barbara"

function greetHowdy(name) {
  return (`Howdy, ${name}`);
}
console.log(greetHowdy("Heidi")); //"Howdy, Heidi"
console.log(greetHowdy("Eddie")); //"Howdy, Eddie"
console.log(greetHowdy("Barbara")); //"Howdy, Barbara"
