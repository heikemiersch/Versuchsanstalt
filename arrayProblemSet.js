// write a function that takes an array as an argument and prints out the elements in the array
// in reverse order (do not actually reverse the array itself)

function printReverse() {
    let arr = [1, 2, 3, 4, 5];
    // console.log(arr);
    for (i = arr.length - 1; i >= 0; i--) {
        // console.log(arr[i]);
    }
}
printReverse();

// write a function which takess an array as an argument and returns true
// if all elements in the array are identical

let arr1 = [1, 1, 1, 1];
let arr2 = [1, 1, 2, 2];
let arr3 = ["loop", "loop", "lopp"]

function isUniform(arr) {
    let firstItem = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== firstItem) {
            // console.log(false);
            return false;
        }
    }
    // console.log(true);
    return true;
}
isUniform(arr3);

// write a function that accepts an array of numbers and returns the sum
// of all numbers in the array

let arr4 = [1, 2, 3];
let arr5 = [4, 8, 15, 16, 23, 42];

function sumArray(arr) {
    let sum = 0;
    arr.forEach(function (i) {
        sum += i;
    })
    // console.log(sum);
    return (sum);
}
sumArray(arr5);

// write a function that accepts an array of numbers and returns
// the maximum number in the array

let arr6 = [1, 2, 3];
let arr7 = [-3, 5, -7, 8];

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    // console.log(max);
    return max;
}
max(arr7);