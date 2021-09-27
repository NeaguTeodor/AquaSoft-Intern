/*
---------------
Write a JavaScript program to replace the first digit in a string
(should contain at least one digit) with a $ character.
*/

const replaceFirstDigit = (str) =>
str.replace(/[0-9]/g, '$');

console.log(replaceFirstDigit('Asdaseda'));
console.log(replaceFirstDigit('Aqua4very66soft'));