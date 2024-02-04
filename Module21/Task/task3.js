
function vowel(sentence) {
    const vowelCount = (sentence.match(/[aeiou]/gi)).length;
    const totalVowels = ('Total vowels numbers: ' + vowelCount);
    return totalVowels;
}
console.log(vowel("eagerly leaping over a waterfall exploring nature"))