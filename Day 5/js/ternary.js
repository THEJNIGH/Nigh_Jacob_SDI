/*
 Jacob Nigh
 1/13/15
 Nigh_Jacob_Ternary
 */

//alert("testing");

//If your GPA is greater than 2.0 you can graduate.

// (condition to test)?true code:false code;

var gpa = 3.8;

if(gpa > 2.0)
{
 console.log("Congratulations you can graduate.");
}
else
{
 console.log("Im sorry you can connot graduate.");
}

//ternary way

(gpa > 2.0)?console.log("Congratulations you can graduate"):console.log("Im sorry you cannot graduate.");

//what book a kid will read

var age = 16;
var book;


// if the child is under 10 they read Green Eggs and Ham otherwise they can read the time machine
// if the kid is greater than 15 then they read twilight.

book = (age < 10)?"Green Eggs and Ham":"The time machine.";
var book2 = (age < 10)?"Green Eggs and Ham":(age < 15)?"The Time Machine":"Twilight";
console.log("You should read " + book);
console.log("You should read " + book2);