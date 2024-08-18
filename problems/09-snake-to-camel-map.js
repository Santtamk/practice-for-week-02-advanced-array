/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:


*/

function snakeToCamel(str) {
  // Your code here

  let split = str.split("_");
  let answer = split.map((item) => helper(item));
  return answer.join("");
}

function helper(letter) {
  let word = letter.split("");
  let newLetter = [];
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      newLetter.push(word[i].toUpperCase());
    } else {
      newLetter.push(word[i].toLowerCase());
    }
  }
  return newLetter.join("");
}

// console.log(helper("ACADEMY"));
console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = snakeToCamel;
} catch (e) {
  module.exports = null;
}
