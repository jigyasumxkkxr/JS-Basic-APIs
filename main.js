// function getLength(str) {
//     console.log("Original String:", str);
//     console.log("Length:", str.length);
//   }
//   getLength("Hello World");

// function findIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.indexOf(target));// cse sensitive
//   }                                 // if no occurance return -1
//   findIndexOf("Hello World", "world"); // more than 1 target return 1 occurance

// function findLastIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.lastIndexOf(target));
//   }
//   findLastIndexOf("Hello World World", "x");// if no occurance return -1

// function getSlice(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After slice:", str.slice(start, end));
//   }                              // if start>end return empty string
//   getSlice("Hello World", 5, 1);// if start===end return empty string

// function getSubstring(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After substring:", str.substring(start, end));
//   }
//   getSubstring("Hello World", 2, 5);

//   function getSubstr(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After substr:", str.substr(start, end));
//   }
//   getSubstr("Hello World", 2, 5);

// function replaceString(str, target, replacement) {
//     console.log("Original String:", str);
//     console.log("After replace:", str.replace(target, replacement));
//   } //case sensitive
//   replaceString("Hello World", "wo", "JavaScript");// no occurance of target no replacement

// function splitString(str, separator) {
//     console.log("Original String:", str);
//     console.log("After split:", str.split(separator));
//   }
//   splitString("Hello World", "1");//if occurance of seprator in not then same string is outpit in array

// // toUpperCase
// function toUpper(str) {
//     console.log("Original String:", str);
//     console.log("After toUpperCase:", str.toUpperCase());
//   }
//   toUpper("Hello World");
  
//   // toLowerCase
//   function toLower(str) {
//     console.log("Original String:", str);
//     console.log("After toLowerCase:", str.toLowerCase());
//   }
//   toLower("Hello World");

// // trim
// function trimString(str) {
//     console.log("Original String:", str);
//     console.log("After trim:", str.trim());
//   } // trim down spaces at end or beginning not middle 
//   trimString("        Hello           World       ");

// console.log(parseInt("42"));//42
// console.log(parseInt("42px"));//42
// console.log(parseInt("px42"));//NaN
// console.log(parseInt("3.14"));//3

// console.log(parseFloat("42"));//42
// console.log(parseFloat("3.14"));//3.14

let user={
    name:"jigyasu",
    age:19
  }
  const u=JSON.stringify(user);
  console.log(u);
  const uu=JSON.parse(u);
  console.log(uu["name"]);
  
  