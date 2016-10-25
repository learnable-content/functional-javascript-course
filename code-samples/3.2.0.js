function greetCurried(greeting) {
  return function(name) {
    if (typeof(greeting) != "string") {
      return ("Greetings!");
    } else if (typeof(name) != "string") {
      return (greeting);
    }
    return (`${greeting}, ${name}`);
  }
}
