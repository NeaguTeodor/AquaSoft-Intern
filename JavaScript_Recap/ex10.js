/*
------------
Write a JavaScript function to extract unique characters from a string.
*/

const getUniqueChars = (str) =>
    new Set(str.split(''));

console.log(getUniqueChars('aaaaabbbbeqqqqsda'));