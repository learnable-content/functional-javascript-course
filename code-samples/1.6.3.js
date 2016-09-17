const attitude = (original, replacement, source) => source => source.replace(original, replacement);
const snakify = attitude(/millenials/ig, "Snake People");
const hippify = attitude(/baby boomers/ig, "Aging Hippies");

console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.
