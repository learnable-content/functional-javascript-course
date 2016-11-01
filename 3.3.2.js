const sayHello = greetDeeplyCurried("Hello")(", ");
console.log(sayHello(".")("Heidi")); //"Hello, Heidi."
console.log(sayHello(".")("Eddie")); //"Hello, Eddie."

const askHello = sayHello("?");
console.log(askHello("Heidi")); //"Hello, Heidi?"
console.log(askHello("Eddie")); //"Hello, Eddie?"

const yellHello = sayHello("!");
console.log(yellHello("Heidi")); //"Hello, Heidi!"
console.log(yellHello("Eddie")); //"Hello, Eddie!"
