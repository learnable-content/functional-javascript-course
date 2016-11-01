const sayHello = greetDeeplyCurried("Hello")(", ");
console.log(sayHello(".")("Heidi")); //"Hello, Heidi."
console.log(sayHello(".")("Eddie")); //"Hello, Eddie."
