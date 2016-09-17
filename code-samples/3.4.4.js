const greetGoodbye = curryIt(greeter, "Goodbye", ", ");
console.log(greetGoodbye(".", "Joe")); //"Goodbye, Joe."
