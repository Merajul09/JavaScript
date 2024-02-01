const sentence = "eagerly leaping over a waterfall exploring nature";

const countA = (sentence.match(/a/g) || []).length;
console.log("Number of 'a' characters: " + countA);
