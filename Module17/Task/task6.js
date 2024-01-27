// ---------------Ticket fare Calculator---------------

let age = 25;
let student = true;
let ticket = 800;
if (age <= 10) {
    console.log('free tour');
}
else if (student) {
    // 50% discount
    console.log(ticket / 2);
}
else if (age >= 60) {
    // 15% discount
    let discount = ticket * 15 / 100;
    let payAmount = ticket - discount;
    console.log(payAmount);
}
else {
    console.log(ticket);
}