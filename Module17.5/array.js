// -----------length----------
// show how many value in the array

const number = [45, 32, 56, 67, 72, 36];
// console.log(number.length); // output: 6;

// ---------------indexOf------------

// console.log(number.indexOf(72)); // output: 4;
// console.log(number[4]); // output: 72;

// ------------set or update value by index--------

// number[2] = 912;
// console.log(number); // output: [45, 32, 912, 67, 72, 36];

// --------------push------------------
// add last value

// number.push(92);
// number.push(99, 11, 22);
// console.log(number); // output: [45, 32, 56, 67, 72, 36, 92, 99, 11, 22]

// --------------pop-------------------
// remove last value

// number.pop();
// console.log(number) // output: [45, 32, 56, 67, 72]

// -------------shift----------------
// remove first value

// number.shift();
// console.log(number); // output: [32, 56, 67, 72, 36]

// -------------unshift----------------
// add first value

// number.unshift(29);
// console.log(number); // output: [29, 45, 32, 56, 67, 72, 36]

// --------------includes------------------
// ata dekhabe value ta array er vitor ase kina

// const numbers = ['ami', 'tmi', 'ora'];
// console.log(numbers.includes('tmi')); // output: true;

// -----------isArray---------------
// ata dekhabe Array kina element ta

// const numbers = ['ami', 'tmi', 'ora'];
// const num = [29, 22, 21];
// const nums = [];
// const boolean = true;
// const food = 'ros o gol la';
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(num));
// console.log(Array.isArray(nums));
// console.log(Array.isArray(boolean));
// console.log(Array.isArray(food));

// ------------------join-----------------

// const numbers = ['ami', 'tmi', 'ora'];
// console.log(numbers.join('+'));
// console.log(numbers.join('|'));

// -----------------concat-----------------

// const numbers = ['ami', 'tmi', 'ora'];
// const series = [21, 29, 31];
// const serial = ['21', '29', '31'];
// console.log(numbers.concat(series));
// console.log(numbers.concat(series).concat(serial));

// ----------------slice------------------

// const numbers = ['ami', 'tmi', 'ora', 21, 29, 31];
// console.log(numbers.slice(0, 4));