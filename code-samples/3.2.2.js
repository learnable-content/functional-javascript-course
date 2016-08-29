function greetCurried(greeting) {
  return function(name) {
    if (typeof(greeting) != "string") {
      return ("Greetings");
    } else if (typeof(name) != "string") {
      return (greeting);
    }
    return (greeting  + ", " + name);
  }
}

var greetHowdy = greetCurried("Hello");
console.log(greetHello("Heidi")); // "Hello, Heidi"
console.log(greetHello(5)); // "Hello"

var greetHi = greetCurried("Hi");
console.log(greetHi("Heidi")); // "Hi, Heidi"
console.log(greetHi(5)); // "Hi"

var greetHowdy = greetCurried("Howdy");
console.log(greetHowdy("Heidi")); // "Howdy, Heidi"
console.log(greetHowdy(5)); // "Howdy"
