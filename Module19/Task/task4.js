const sentence = "eagerlyx leapingx overx a waterfally exploringy naturey";
const modifiedX = sentence.replace(/x/g, 'X');
const modifiedY = sentence.replace(/y/g, 'Y');
const add = modifiedX + " " + modifiedY;
const charArray = add.split(' ');
console.log(charArray);