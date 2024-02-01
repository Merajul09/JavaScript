const sentence = "eagArly lAaping ovAr a watArfall Axploring nature";
const count = (sentence.match(/a/g) || []).length;
console.log("a character:" + count);
const countA = (sentence.match(/A/g) || []).length;
console.log("A character:" + countA);
