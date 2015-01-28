/*
    *Jan 20 1015
    *Jacob Nigh
    *Nigh_Jacob_Loops worksheet
*/

//alert("JavaScript works!");

//While loop

//How many cans of soda do you have?


var cansPkg = prompt("How many packs of soda cans do you have?") //created a variable to hold the prompt
while (cansPkg == isNaN || cansPkg === "") //created a while loop to check and see if they had entered not a number or if they left it blank
{
    choice = prompt("Please enter the amount of soda can packs you have: "); //made it loop everytime its not a number or blank
}
cansPkg = parseInt(cansPkg); //converts that into a number
var total = cansPkg * 12; //made an equation to do cans times 12
console.log("You have " + total + " can(s)"); //print the total of cans

//For Loop

//Making baskets in basket ball

var baskets = prompt("What score do you want to go to?"); //basket to hold the users answer
while (baskets === "" || baskets === isNaN) //created a while loop to check and see if the user actually put in a number
{
    baskets = prompt("Im sorry you didnt put anything. What score do you want to go to.");//re asks them if its not a number or blank
}
baskets = parseInt(baskets); //converst baskets to a number
for(var hoops = 0; hoops <= baskets; hoops++) // for loop to declar hoops equaling 0 and testing it to be less than baskets and then adding one to hoops everytime hoops is less than or equal to baskets
{
    if (hoops === baskets - 1) //made and if statement to tell you when you have one more basket to go.
    {
        console.log("Next basket wins you currently have " + hoops); // Next to last number it prints this
    }
    else
    {
        console.log("Your score is " + hoops); //other wise it prints this till it gets to baskets -1
    }
}

//Do while loop

//Checking minutes on how much work put in

var time = prompt("How many hours did you put in?") // created time to hold the users input
while(time === isNaN || time === "") // checked to see if the user put in the correct information
{
    time = promtp("Please enter a numerical value for your hours."); //created a while loop incase they didnt put in correct information
}
do //Do while loop to 
{
    time = parseInt(time); //changed the time variable into a number
    var minutes = time * 60; // made an equation to muliply hours into minutes
    console.log("You have put in " + minutes + " minute(s)."); //print out how many minutes you have put in
    time++; // incremented
    
    
}
while (minutes <= 900); // made it while to 900 

