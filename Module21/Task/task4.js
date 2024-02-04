function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';
    let maxLength = 0;
    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i].replace(/[^a-zA-Z]/gi, '');
        if (currentWord.length > maxLength) {
            longestWord = currentWord;
            maxLength = currentWord.length;
        }
    }
    return longestWord;
}
var sentence = "I am learning Programming to become a programmer";
var longestWord = findLongestWord(sentence);
console.log("Longest word: " + longestWord);
