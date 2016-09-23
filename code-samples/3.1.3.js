function greet(greeting, name) {
  if (typeof(name) != "string" || typeof(greeting) != "string") {
    return ("Greetings");
  }
  return (`${greeting}, ${name}`);
}
console.log(greet("Hello", "Heidi")); //"Hello, Heidi"
console.log(greet(5)); //"Hello"

function greetHello(name) {
  if (typeof(name) != "string") {
    return ("Hello");
  }
  return (`Hello, ${name}`);
}
console.log(greetHello("Heidi")); //"Hello, Heidi"
console.log(greetHello(5)); //"Hello"

function greetHi(name) {
  if (typeof(name) != "string") {
    return ("Hi");
  }
  return (`Hi, ${name}`);
}
console.log(greetHi("Heidi")); //"Hi, Heidi"
console.log(greetHi(5)); //"Hi"

function greetHowdy(name) {
  if (typeof(name) != "string") {
    return ("Howdy");
  }
  return (`Howdy, ${name}`);
}
console.log(greetHowdy("Heidi")); //"Howdy, Heidi"
console.log(greetHowdy(5)); //"Howdy"
