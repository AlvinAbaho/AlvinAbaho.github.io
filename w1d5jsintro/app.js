/* --------- TESTING FUNCTIONS --------- */

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    let predicate;
    if (Array.isArray(found)) predicate = arraysAreEqual(expected, found);
    else predicate = expected === found;
    return predicate ? "TEST SUCCEEDED" : "TEST FAILED. Expected " + expected + " found " + found;
}

/* checks if two arrays are equal*/
const arraysAreEqual = (a, b) =>
    a.length === b.length && a.every((v, i) => v === b[i]);


/* --------- ASSIGNMENT SOLUTIONS --------- */

/* max returns the maximum of 2 arguments */
function max(a, b) {
    return a > b ? a : b;
}

console.log("Expected output of max(20,10) is 20 -> " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

console.log("Expected output of maxOfThree(55,4,44) is 55 -> " + myFunctionTest(55, maxOfThree(55, 4, 44)));


/* isVowel takes a character and returns true if it is a vowel, false otherwise.*/
function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}

console.log("Expected output of isVowel('a') is true -> " + myFunctionTest(true, isVowel("a")));

// console.log("Expected output of isVowel('P') is false -> " + myFunctionTest(false, isVowel("c")));

/* sum takes an array and returns the sum of all elements*/
function sum(arr) {
    return arr.reduce((acc, item) => acc + item, 0);
}

console.log("Expected output of sum([1,2,3,4]) is 10 -> " + myFunctionTest(10, sum([1, 2, 3, 4])));

/* multiply takes an array and returns the product of all elements*/
function multiply(arr) {
    return arr.reduce((a, b) => a * b, 1);
}

console.log("Expected output of multiply([1,2,3,4]) is 10 -> " + myFunctionTest(24, multiply([1, 2, 3, 4])));

/* reverse takes in a string and returns its reversal*/
function reverse(str) {
    // return str.split("").reverse().join(""); // <- also works
    return [...str].reverse().join("");
}

console.log("Expected output of reverse('xylem') is melyx -> " + myFunctionTest("melyx", reverse("xylem")));

/* findLongestWord takes an array of words and returns the length of the longest one.*/
function findLongestWord(words) {
    return words.reduce((longestLength, word) => {
        return longestLength > word.length ? longestLength : word.length;
    }, 0);
}

console.log("Expected output of findLongestWord(['One','Three','Configure','xylem']) is 9 => " +
    myFunctionTest(9, findLongestWord(['One', 'Three', 'Configure', 'xylem'])));


/* filterLongWords takes an array of words and an integer i and returns the array of words that are longer than i.*/
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

console.log("Expected output of filterLongWords(['One','Threes','Configure','xylem'], 5) is ['Threes','Configure'] => " +
    myFunctionTest(["Threes", "Configure"], filterLongWords(["One", "Threes", "Configure", "xylem"], 5)));


/* --------- JS FIDDLE MODIFICATION --------- */

const a = [1, 3, 5, 3, 3];
console.log(`Initial Array a: ${a}`);
/* multiply each element by 10*/
const multiplyBy10 = a.map(element => element * 10);
console.log(`All elements multiplied by 10 => ${multiplyBy10} ${myFunctionTest([10, 30, 50, 30, 30], multiplyBy10)}`);

/* Array with all elements equal to 3*/
const threeArray = a.map(() => 3);
console.log(`Array with all elements equal to 3 => ${threeArray} ${myFunctionTest([3, 3, 3, 3, 3], threeArray)}`);

/* Product of all elements */
console.log(`Product of all elements => ${multiply(a)} ${myFunctionTest(135, multiply(a))}`);