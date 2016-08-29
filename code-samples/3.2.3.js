var greetWrongType = greetCurried(5);
console.log(greetWrongType("Heidi")); // "Greetings"
console.log(greetWrongType(5)); // "Greetings"
console.log(greetWrongType(false)); // "Greetings"
console.log(greetWrongType(null)); // "Greetings"
