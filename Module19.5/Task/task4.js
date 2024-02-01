const words = 'I am a hard working person'

const wordsArray = words.split(' ');
const reversedWordsArray = wordsArray.reverse();
const reversedWords = reversedWordsArray.join(' ');

console.log(reversedWords); // output: person working hard a am I;
