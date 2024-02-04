function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * (9 / 5)) + 32;
    const round = fahrenheit.toFixed(1);
    return round;
}
console.log(celsiusToFahrenheit(37))