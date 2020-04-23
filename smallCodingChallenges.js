// reverse string

function reverseString(str) {
    let reverse = str.split("").reverse().join("");
    console.log(reverse);
}
reverseString("challenging");

// or

function reverseStringWithALoop(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    console.log(reverse);
}
reverseStringWithALoop("lala boom");

// factorialize a number

function factorialize(num) {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac *= i;
    }
    console.log(fac);
}
factorialize(5);

// palindrome checl

function checkPalindrome(str) {
    let reverse = str.split("").reverse().join("");
    if (reverse === str) {
        console.log("it's a palindrome!")
    } else {
        console.log("nope sorry. no palindrome.")
    }
}
checkPalindrome("racecar");

// find longest word

function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    console.log(longestWord);
}
findLongestWord("I love the sea");

// or

function findLongestWordBySorting(str) {
    console.log(str.split(" ").sort(function (a, b) {
        return b.length - a.length
    })[0]);
}
findLongestWordBySorting("I love the ocean")