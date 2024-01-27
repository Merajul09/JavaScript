const age = 65;
const price = 450;
// age under 12, output: Eat for free;
// age 12 to 40, output: 450;
// age under 50, output: 405;
// age under 60, output: 337.5;
// age upper 60, output: 225;

if (age <= 12) {
    console.log('Eat for free')
}
else if (age >= 60) {
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age >= 50) {
    // 25% discount
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age >= 40) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}