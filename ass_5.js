// Ass_1:
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.split('')[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.at(0).toLowerCase().repeat(3)); // eee

// Ass_2:
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.indexOf(letterZ) != -1); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True