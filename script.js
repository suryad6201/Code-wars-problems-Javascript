"use strict";

// var rdashAlpha = /[-_]([a-z])/g;

// function fCamelCase(_all, letter) {
//   return letter.toUpperCase();
// }

// function camelCase(string) {
//   return string.replace(rdashAlpha, fCamelCase);
// }

// console.log(camelCase("Background_Color"));

// function toCamelCase(input) {
//   return input.toLowerCase().replace(/[-_](.)/g, function (_all, group1) {
//     return group1.toUpperCase();
//   });
// }

// const s = "Foo-bar_Baz";
// console.log(toCamelCase(s));

// function toCamelCase(str) {
//   let characters = /[-_](.)/g;
//   return str.replace(characters, function (_all, letter) {
//     return letter.toUpperCase();
//   });
// }

// const result = toCamelCase("foo-boo-Three");
// console.log(result);

//------------------------------------------------------------------------------------------------------------------

//QUESTION: 2. Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
//SOLUTION:
// function getCount(str) {
//   var count = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// getCount("abracadabra");
//------------------------------------------------------------------------------------------------------------------
//QUESTION: 3.
//SOLUTION:
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// twoSum([2, 7, 11, 15], 9);
//------------------------------------------------------------------------------------------------------------------

//QUESTION: 4. Who likes it?

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// SOLUTION:
// const names = ["Surya","Vikram","Ajith","Vijay","Kamal","Rajini"];

// function likes(names) {
//   return {
//     0: 'no one likes this',
//     1: `${names[0]} likes this`, 
//     2: `${names[0]} and ${names[1]} like this`, 
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//   }[Math.min(4, names.length)] //Used bracket Notation to get the value of the property 0 to 4;
// }

// console.log(likes(names));

//------------------------------------------------------------------------------------------------------------------

//QUESTION: 5. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// SOLUTION:
function arrayDiff(a, b) {
  if(a.length ===0){return []}
  if(b.length === 0){return a}

  let newArr = [];
  a.forEach(function included(element){
    if(!b.includes(element)) {newArr.push(element)}
    
  })
  return newArr;
}

console.log(arrayDiff([1,2,3],[1,2]));

// const x = [1, 2, 3];
// const y = [];

// console.log(y[0]);

// y[0] || console.log(x);

// if (y[0] === undefined) {
//   console.log("FAlse");
// }

// console.log(y.length);