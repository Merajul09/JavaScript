let sentence = "javaScript is a great language";
let words = sentence.split(' ');
// Capitalize each word function
let capitalized = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
let result = capitalized.join(' ');
console.log(result);