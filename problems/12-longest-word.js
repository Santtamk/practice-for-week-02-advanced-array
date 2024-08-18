/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function (sentence) {
  // Your code here
  let split = sentence.split(" ");
  let initial = split[0];
  split.forEach((item) =>
    item.length > initial.length ? (initial = item) : null
  );
  return initial;
};

// Your code here
let helper = function (word) {
  return word.length;
};
// console.log(helper('where'))
console.log(longestWord("where did everyone go")); // 'everyone'
console.log(longestWord("prefer simplicity over complexity")); // 'simplicity'
console.log(longestWord("")); // ''

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = longestWord;
} catch (e) {
  module.exports = null;
}
