// let sentence = "javaScript is a great language";
// let words = sentence.split(' ');
// // Capitalize each word function
// let capitalized = words.map(function (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// });
// let result = capitalized.join(' ');
// console.log(result);

// let sentence = "javaScript is a great language";
// let words = sentence.split(" ");
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
// }
// let convert = words.join(" ")
// console.log(convert);

function converted(words) {
    let word = words.split(" ");
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].slice(1).toLowerCase();
    }
    // let convert = word.join(" ");
    return word.join(" ");
}
let str = "javaScript is a great language";
console.log(converted(str));
let str2 = "result is the same as in the previous example, where each sentence in the original string is capitalized";
console.log(converted(str2));