/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThree = (x, y, z) => {
    if (x > y && x > z) {
    return x;
    }   else if (y > x && y > z) {
        return y
    }       else if (z > x && z > y) {
            return z
    }
       }
   

console.log('Exercise 2 Result:', maxOfThree(25, 101, 7));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

const isCharAVowel = (x) => {
       if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u"){
        return true;
       } else {
            return false
       } }
       
console.log('Exercise 3 Result:', isCharAVowel("d"));

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

function sumArray(...sum){
    let total = 0;
    for(let i = 0; i < sum.length; i++) {
        total = total + sum[i]
    }
    return total
}


console.log('Exercise 4 Result:', sumArray(1, 17, 2000, 616));

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

function multiplyArray(...multiply){
    let total = 1;
    for(let i = 1; i < multiply.length; i++) {
        total = total * multiply[i]
    }
    return total
}


console.log('Exercise 5 Result:', multiplyArray(1, 17, 2000, 616));

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

const reverseString = (xyz) => {
    let phrase = "";
    for (let i = xyz.length - 1; i >= 0; i--){
       phrase = [phrase] + xyz[i];
}
return phrase;
}


console.log('Exercise 6 Result:', reverseString("This one was hard"));

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/

function longestStringInArray(xyz) {
    let anything = 0;

    for (let i = 0; i < xyz.length; i++) {
        if (xyz[i].length > anything) {
            anything = xyz[i].length;
        }
    }

    return anything;
}


console.log('Exercise 7 Result:', longestStringInArray(["rugrats", "spongebob", "tennis", "books", "heiress", "cat" ]))

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/


console.log('Exercise 8 Result:', );









