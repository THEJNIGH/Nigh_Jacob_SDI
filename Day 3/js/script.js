/*
Jacob Nigh - 1/9/15 - Day 3 Coding
 */

// This is a single line comment.

// This is an alert.

//alert("Testing to see if this thing connected.");

// Console.log - allows programmers to see information.

console.log("This is the console.");

// Declare a variable.
// We use the keyword var.

var intWhatEver1;   // This is going to be the declaration of a variable.
intWhatEver1 = 42;    // This is definition of a variable.

console.log(intWhatEver1) // Printed the variable.

// Declare and define a variable.

var a = 2; // Declared and defined a = 2 as a variable.

console.log(a); // Printed the variable a

// Simple Math

a = a + 3; // Adding three to the variables declared amount.
console.log(a); // Printed the variable a

var b; // Declared the variable
b = a + 3; // Added a + 3 to make that the b's value.
console.log(b); // Printed the variable b

//Find out age.

var yearBorn = 1996; // Declared and defined yearBorn = 1996 as a variable.

// Age is calculated by current year minus year born.

var currentYear = 2015; // Declared and defined currentYear = 2015 as a variable.
var ageNow; // Declared area as a placeholder to carry numbers.

ageNow = currentYear - yearBorn - 1;
console.log("My age is " + ageNow);

// Math
// +, -, *, /

//Find Area of a Triangle (1/2Bh)

var base = 8; // Declared and defined base = 8 as a variable.
var height = 10; // Declared and defined height = 10 as a variable.
var area; // Declared area as a placeholder to carry numbers.

area = base * height * 0.5; // Formula to do the equation.

console.log("The area of a triangle is " + area); // Statement to print it out.

// Mod - %
// Gives Remainder

var remainder = 32%10; //
console.log("The remainder is " + remainder); // Statement to print it out.

//Even or Odd.
// 1 if odd.
// 0 if even.

var EvenOrOdd = 67%2; // Mod by 2.
console.log(EvenOrOdd); // Statement to print it out.

// Assignment Operators
/*
= basic assignment.
++ increment positively
-- decreases negatively.
+= addition assignment.
-= subtraction assignment.
/= division assignment.
*= multiple assignment.
 */

var intCounter = 1;
intCounter++; // Counter = counter + 1.
console.log(intCounter);

intCounter--; // Counter = counter - 1.
console.log(intCounter);

intCounter += 3; // Counter = counter + 3.
console.log(intCounter);

intCounter -= 2; // Counter = counter - 2.
console.log(intCounter);

intCounter /= 2; // Counter = counter /2.
console.log(intCounter);

intCounter *= 4; // Counter = counter * 4.
console.log(intCounter);

/* String - is any text variable
   Is used at the beginning and the end of the string
   Used to distinguish between variable name and random text
 Single quotes ' double quotes " are both used, BUT MUST MATCH */

var kermit = "Light Green";
var frogName = "Kermit";
console.log(frogName + " is " + kermit);

// Double quote or Single quote.
// Use single quote when you have a quote with in a quote.
var phrase = 'I don\'t know!';
console.log(phrase);

// multi - line \n

console.log(phrase + "\n You never know!")

// Boolean

var yes = true;
var no = false;
var wrong = "false";

// PEMDAS
// Parentheses, Exponents, Multiplication, Division, Addition, Subtraction

// Find quiz averages.

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;
var average;

average = (quiz1 + quiz2 + quiz3) / 3;
console.log("Your average is " + average);

// Concatenation combines strings with variables and sorts.

var firstName = "Kermit";
var lastName = "The Frog";
var fullName = firstName + " " + lastName;

console.log(fullName);
console.log(fullName + " " + "is not my favorite muppet.");

var d = "6";
var e = "7";
var combine = d + e;

console.log(combine);

// Constant values are always upper case.

var PIE = 3.14;

// Round to a decimal place.
// toFixed(#); # = how many numbers you want to go.

var crazyNumbers = 2.32423598509325;

crazyNumbers = crazyNumbers.toFixed(2);
console.log(crazyNumbers);

