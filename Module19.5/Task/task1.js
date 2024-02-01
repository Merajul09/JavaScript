// Reversed array with for of loop

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const revColor = [];

// for of loop

// for (const color of colors) {
//     revColor.unshift(color);
// }
// console.log(revColor); // output: [ 'orange', 'yellow', 'green', 'blue', 'red' ]

// for loop

// for (let i = 0; i < colors.length; i++) {
//     revColor.unshift(colors[i]);
// } console.log(revColor); // output: [ 'orange', 'yellow', 'green', 'blue', 'red' ]

// while loop

// let i = colors.length - 1;
// while (i >= 0) {
//     revColor.push(colors[i]);
//     i--;
// } console.log(revColor); // output: [ 'orange', 'yellow', 'green', 'blue', 'red' ]

// do while loop

// let i = colors.length - 1;
// do {
//     revColor.push(colors[i]);
//     i--;
// } while (i >= 0);
// console.log(revColor); // output: [ 'orange', 'yellow', 'green', 'blue', 'red' ]