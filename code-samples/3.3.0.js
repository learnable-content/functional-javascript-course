function greetDeeplyCurried(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        return (greeting + separator + name + emphasis);
      };
    };
  };
}

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
console.log(greetAwkwardly("Heidi")); //"Hello...Heidi?"
console.log(greetAwkwardly("Eddie")); //"Hello...Eddie?"
