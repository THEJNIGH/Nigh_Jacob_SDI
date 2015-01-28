/*
    *Jan 17 1015
    *Jacob Nigh
    *Nigh_Jacob_Validating prompts
*/

//alert("JavaScript works!");

//var userInput = prompt("Please enter your name: ");
//validating a prompt with a conditional.
/*if (userInput === "")
{
    //user did not type anything
    userInput = prompt("Please do not leave blank, please enter your name: ");
    
}
*/
// Instead we are going to use a while loop.
/*
var firstName = prompt("Please enter your first name: ");
while(firstName === "")
{
    userInput = prompt("Please do not leave blank. Please enter your first name: ");
}
*/

//Test to see if it is a number isNaN
/*
console.log(isNaN("Monkey")); //returns true
console.log(isNaN(7)); //returns false

var age = prompt("What is your age: ");
//now validate that the user typed in a number
while(isNaN(age) || age === "")
{
    //this code runs anytime that the age is not a number.
    //promtp user for number
    age = prompt("Im sorry that wasnt a number. Pleas enter your age.");
}
*/
var choice = prompt("Please type in yes or no");
choice = choice.toLowerCase(); 
while (choice != "yes" && choice != "no")
{
    choice = prompt("Please only type in yes or no");
}
