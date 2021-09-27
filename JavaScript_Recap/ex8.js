/*
------------
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'
*/

const alphabeticalOrder = (str) =>
str.split('').sort((a,b) => a>b ? 1: -1)
.join('');

console.log(alphabeticalOrder('AquaSoft'));
console.log(alphabeticalOrder('RuffRiders'));
