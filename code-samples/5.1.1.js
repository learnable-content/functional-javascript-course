// from earlier examples with the methods
// exactlyThree, capitalize, and merged defined
const animals = ["cat","dog","fish"];
let threeLetterAnimals = animals.filter(exactlyThree)
                                .map(capitalize)
                                .reduce(merged);
