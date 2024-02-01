const sentence = "eagerly leaping over a waterfall exploring nature";
const vowelCount = (sentence.match(/[aeiou]/gi) || []).length;

console.log('vowelNumber:' + vowelCount);
