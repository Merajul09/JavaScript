function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch.";
    return result;
}
// console.log(inchToFeet(68));

function mileToKilo(mile) {
    const kilo = mile * 1.60934;
    const kiloNumber = parseInt(kilo);
    const kiloRemaining = kilo.toFixed(3).toString().slice(2).replace('.', '');
    const result = kiloNumber + " Kilo " + kiloRemaining + " Meter.";
    return result;
}
console.log(mileToKilo(17))