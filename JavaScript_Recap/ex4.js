/*
----------
Write a JavaScript program to check whether a given array of integers is sorted in ascending
order
*/

const isAscending = (arr) => {
    for (let i = 0; i < arr.length; i +=1) {
        if (arr[i+1] < arr[i])
        return false;
    }
    return true;
}
console.log(isAscending([2,3,11,24,54]));
console.log(isAscending([2,13,121,5,41]));
console.log(isAscending([1,2,3,4,5,6,6,8,9]));

