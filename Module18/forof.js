// const numbers = ["21", "34", "43", "51"];
// for (let num of numbers) {
//     console.log(num);
// }

// const fruits = ["banana", "mango", "apple", "grape"];
// for (let fruit of fruits) {
//     console.log(fruit.toUpperCase() + ': ' + 'I want to eat');
// }


let sentence = "javaScript is a great language";
let words = sentence.split(' ');
// Capitalize each word function
let capitalized = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
let result = capitalized.join(' ');
console.log(result);
