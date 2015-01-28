/*
 Jacob Nigh
  1/9/15
  Nigh_Jacob_Instructional_Expressions
 */

var intSlices = 8; //Declared and defined intPeople to 8
var intPeople = 6; //Declared and defined intPeople to 6
var intPizzas = 4; //Declared and defined intPizzas to 4
var intTotalSlices; //Declared variable
var intTotal; //Declared variable

intTotalSlices = intPizzas * intSlices; //TotalSlices = pizzas * slices
intTotal = intTotalSlices / intPeople; //Total = totalslices / people.

console.log("Each person ate " + intTotal + " at the pizza party!"); //Printed the line

// Dog names Sparky

var slices = 8; //Declared and defined intPeople to 8
var people = 3; //Declared and defined intPeople to 3
var pizzas = 4; //Declared and defined intPizzas to 4
var totalSlices; //Declared variable
var sparky; //Declared variable

totalSlices = pizzas * slices; //totalslices = 4 * 8;
sparky = totalSlices%people;

console.log("Sparky got "+ sparky + " slice(s) of pizza."); //Printed the line

// Average Shopping Bill

var intBill1 = 60; //Declared and defined bill = 60
var intBill2 = 75; //Declared and defined bill = 75
var intBill3 = 80; //Declared and defined bill = 80
var intBill4 = 55; //Declared and defined bill = 55
var intBill5 = 50; //Declared and defined bill = 50
var intAverage; //Declared variable
var totalBill; //Declared variable

totalBill = intBill1 + intBill2 + intBill3 + intBill4 + intBill5; //Just adds all bills and gets total
intAverage = (intBill1 + intBill2 + intBill3 + intBill4 + intBill5) / 5; // takes total and divides by 5
console.log("You have spent " + totalBill + "$ over 5 weeks. This is the average " + intAverage + "$ per week."); // Prints statement

//Discounts

var OriginalPrice = 200.99; //Declared and defined OriginalPrice = 200.99
var iphone = "iPhone"; //Declared and defined iphone
var Discount; //Declared variable
var DiscountPer = .2; //Declared and defined DiscountPer = .2
var tax = .07; //Declared and defined tax = .07
var DiscountPrice; //Declared variable
var taxTotal; //Declared variable
var totalPrices; //Declared variable
var OverallTotal; //Declared variable

totalPrices= OriginalPrice * DiscountPer; //takes original price and multiples it by discount price
DiscountPrice = OriginalPrice - totalPrices; //takes the original price and minus it by the total prices to get the discount price
taxTotal = OriginalPrice * tax; // Finding tax
Discount = DiscountPer * 100; // getting the percent to show up as a whole number
OverallTotal = DiscountPrice + taxTotal; // Finds price with tax



console.log("Your " + iphone +"  originally cost $" + OriginalPrice +
",but with the discount of " + Discount + "%, its now " + DiscountPrice.toFixed(2)
+ " without tax, but with tax its " + OverallTotal.toFixed(2) + " with tax." ); //Prints statement.



