/*
 Jacob Nigh
 1/13/15
 Nigh_Jacob_Expressions_Assignment
 */

//alert("testing");

var longP = prompt("Please enter the length of the long parallel of your trapezoid:"); // asked for the length of the longest parallel
longP = parseInt(longP);
var shortP = prompt("Please enter the length of the short parallel:"); // asked for the length of the shortest parallel
shortP = parseInt(shortP);
var height = prompt("Please enter the height:"); // ask for the height
height = parseInt(height);
var peices = [longP, shortP, height]; // the array to hold the asked information
var a
console.log(peices);

peices[0] += peices[1];
var a = peices[0];
a *= peices[2];
console.log(a);