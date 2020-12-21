
let word = "House";
let sum = 0;
let wordArray = word.split('');
// i = 0;
// wordArray[i];
let letter = wordArray.shift();
let valueOfLetter = letter.charCodeAt(0);
sum += valueOfLetter;

letter = wordArray.shift();
valueOfLetter = letter.charCodeAt(0);
sum += valueOfLetter;

letter = wordArray.shift();
valueOfLetter = letter.charCodeAt(0);
sum += valueOfLetter;

letter = wordArray.shift();
valueOfLetter = letter.charCodeAt(0);
sum += valueOfLetter;

letter = wordArray.shift();
valueOfLetter = letter.charCodeAt(0);
sum += valueOfLetter;

console.log(valueOfLetter);
console.log(sum);