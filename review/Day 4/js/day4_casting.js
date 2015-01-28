/*
 Jacob Nigh
 1/13/15
 Nigh_Jacob_Casting
 */

//alert("testing");

//Casting = one variable to be another

var stringVar = "6";
var results = 7 + stringVar;
console.log(results);

//Number(variable or value to cast) - converts to number

var castingResults = 7 + Number(stringVar);
console.log(castingResults);

//String(treated as a text string)

var areaCode = 336;
var firstDig = 210;
var secondDig = 7022;

var phoneNumber = "(" + areaCode + ")" + "-" + firstDig + "-" + secondDig;
console.log(String(phoneNumber)); //One of the ways to do it
console.log(String(areaCode) + String(firstDig) + secondDig); //Another way to do it.
console.log(areaCode + firstDig + secondDig); // This is not how to do it.

//Parsing an integer
//ParseInt() looks threw a text string and returns a number
//When doing parsing if there are multiple numbers it only returns the first number
//The text string has to start with that number. However leading and trailing spaces are okay
//If it cant find an integer it returns NaN
//NaN means Not a Number

var a = parseInt("19 years old");
console.log(a);

var b = parseInt("I am 19 years old");
console.log(b);

var c = Number("19 years old");
console.log(c);

//Prompts only return strings.

var shoesHad = prompt("How many shoes did you own before?");
var shoesBought = prompt("How many pairs of shoes did you buy?");

//Add shoes bought with shoes had for total number of shoes.

var totalShoes = parseInt(shoesHad) + parseInt(shoesBought);
console.log("You have this " + totalShoes + " many shoes!");
