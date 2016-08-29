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
