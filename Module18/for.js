// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// even numbers
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// odd numbers sum
// even numbers sum
// let odd = 0;
// let even = 0;
// for (let i = 1; i <= 10; i++) {
//     const j = i;
//     if (j % 2 === 1) {
//         odd += j;
//     } else {
//         even += j;
//     }
// }
// console.log(odd);
// console.log(even);

// const numbers = ["ami", "tmi", "tara", "ora"];
// for (const number of numbers) {
//     // console.log(number);
// }
// for (let m = 0; m < numbers.length; m++) {
//     const element = numbers[m];
//     // console.log(element);
// }
// let m = 0;
// while (m < numbers.length) {
//     // console.log(numbers[m]);
//     m++;
// }

// Reversed
const numbers = ["ami", "tmi", "tara", "ora"];
const rev = [];
for (const number of numbers) {
    rev.unshift(number);
}
// console.log(rev);

const reverse = [];
for (let m = 0; m < numbers.length; m++) {
    const element = numbers[m];
    reverse.unshift(element);

}
// console.log(reverse);

// const reversed = [];
// let m = 0;
// while (m < numbers.length) {
//     const element = numbers[m];
//     reversed.unshift(element);
//     m++;
// } console.log(reversed)
