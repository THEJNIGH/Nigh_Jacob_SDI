/*
 Jacob Nigh
 1/13/15
 Nigh_Jacob_Expressions_Assignment
 */

//alert("testing");

var longP = prompt("Please enter the length of the long parallel of your trapezoid:"); // Asked for the length of the longest parallel.
longP = parseInt(longP); // Changing the entered value to a number.

var shortP = prompt("Please enter the length of the short parallel:"); // Asked for the length of the shortest parallel.
shortP = parseInt(shortP); // Changing the entered value to a number.

var height = prompt("Please enter the height:"); // Ask for the height.
height = parseInt(height); // Changing the entered value to a number.

var peices = [longP, shortP, height]; // The array to hold the asked information.

var a;
var total;


peices[0] += peices[1]; // Use of first assignment operator to all the second piece of information to the first piece and the first piece holds that information.
a = peices[0]; // Declared and defined a and made it equal to the first piece of the array.
a *= peices[2]; // Use of second assignment operator and took a and multiplied it to the last part of the array.
total = a /2; // Last part declared and defined total and make it equal to a divided by 2.


console.log("The area of your trapezoid is: " + total); // Printed the statement.


