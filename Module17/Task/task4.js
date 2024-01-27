let myScore = 75;
let friendScore = 59;

if (myScore >= 80 && friendScore >= 80) {
    console.log('go for lunch');
}
else if (myScore >= 80 && friendScore >= 60) {
    console.log('good luck next time');
}
else if (myScore >= 80 && friendScore >= 40) {
    console.log('unseen message');
}
else if (myScore >= 80 && friendScore <= 40) {
    console.log('block you');
}
else {
    console.log('go to home and sleep')
}