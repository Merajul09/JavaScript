let numbers = [5, 6, 11, 12, 98, 5]

// using just for of loop

let duplicate = 0;
let duplicate2 = 0;
let find = 5;
let find2 = 25;
for (const number of numbers) {
    if (number === find) {
        duplicate++;
    }
    if (number === find2) {
        duplicate2++;
    }
}
// console.log(duplicate);
// console.log(duplicate2);




// using function
function noDuplicate(items) {
    let duplicate = [];
    for (const number of numbers) {
        if (duplicate.includes(number) === false) {
            duplicate.push(number);
        }
    } return duplicate;
}
// console.log(noDuplicate(numbers));