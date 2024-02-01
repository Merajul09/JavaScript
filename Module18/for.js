// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// even numbers
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// odd numbers sum
// even numbers sum
let odd = 0;
let even = 0;
for (let i = 1; i <= 10; i++) {
    const j = i;
    if (j % 2 === 1) {
        odd += j;
    } else {
        even += j;
    }
}
console.log(odd);
console.log(even);