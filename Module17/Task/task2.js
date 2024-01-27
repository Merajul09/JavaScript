// BMI Calculator

let weight = 86;
let height = 68;
let calculate = (weight / ((height * 0.0254) ^ 2));

if (calculate < 18.5) {
    console.log('you are underweight BMI=' + calculate.toFixed(1));
}
if (calculate >= 18.5 && calculate <= 24.9) {
    console.log('you are normal BMI=' + calculate.toFixed(1));
}
if (calculate >= 25 && calculate <= 29.9) {
    console.log('you are overweight BMI=' + calculate.toFixed(1));
}
if (calculate >= 30) {
    console.log('you are obese BMI=' + calculate.toFixed(1));
}