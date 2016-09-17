const greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
console.log(greetAwkwardly("Heidi")); //"Hello...Heidi?"
console.log(greetAwkwardly("Eddie")); //"Hello...Eddie?"
