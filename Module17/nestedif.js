const money = 45;
// money upper 400, output: you are rich;
// money upper 200, output: you are halka rich;
// money upper 50, output: you are poor;
// money under 50, output: you are so poor;

if (money > 400) {
    console.log('you are rich')
}
else {
    if (money > 200) {
        console.log('you are halka rich')
    }
    else {
        if (money > 50) {
            console.log('you are poor')
        }
        else {
            console.log('you are so poor')
        }
    }
}