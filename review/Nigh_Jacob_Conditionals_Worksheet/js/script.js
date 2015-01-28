/*
 Jacob Nigh
 1/13/15
 Nigh_Jacob_Conditional_Worksheet
 */

//alert("testing");

/*
 A driver has to determine if they can make it across the desert with their current fuel.
 They are about to past the last gas station for the next 200 miles and they need to
 determine whether they should stop now for gas or not.
 */

var finalDestination = 200; //Define and declared finalDestination to equal 200
var mpg = prompt("How many miles do you get per gallon?"); //Ask the user for the miles per gallon for their car
mpg = parseInt(mpg); //Use parseInt to change the string into a number
var percent = prompt("What is the percent left in your gas tank?"); //Ask the user the percent of gas they have left
percent = parseInt(percent); //Use parseInt to change the string into a number
var gallons = prompt("How many gallons can the car hold?"); //Ask the user how gallons their cars hold
gallons = parseInt(gallons); //Use parseInt to change the string into a number
var distance; //Declared distance as a placeholder

var car = [mpg, percent, gallons]; //created an array to hold my values from the user.

distance = mpg * gallons; //Now using distances to hold the true miles the user can go with current gas

if(distance > finalDestination && percent > 40) //Creating if statement to see if the user can make it 200 miles without stopping for gas
{
 console.log("Yes, you can make it without stopping for gas!"); //Prints the statement
}
else if(percent < 40 && distance < finalDestination) //Checking if the first statement is wrong to see if they really need to stop for gas
{
 console.log("You only have " + car[2] + " gallons of gas in your tank, better get gas now while you can!"); //Prints the statement
}


/*
 A student earns a number grade at the conclusion of a course at Full Sail.
 Determine the appropriate letter grade for that number using conditional statements.
 */

var studentGrade = prompt("What is your grade in a percentage?"); //Ask the user for the percent of grade they had gotten
studentGrade = parseInt(studentGrade); //Use parseInt to change the string into a number

var gradingScale = ["A!", "B!", "C!", "D!", "F!"]; //Created an array to hold the letter grades

if(studentGrade >= 90 || studentGrade <=100) //If statement to check and see if the number given is in between those amounts
{
 console.log("You have a " + studentGrade + ", which means you have earned a(n) " + gradingScale[0]); //Prints the statement
}
else if(studentGrade >=80 || studentGrade <=89) //If statement to check and see if the number given is in between those amounts
{
 console.log("You have a " + studentGrade + ", which means you have earned a(n) " + gradingScale[1]); //Prints the statement
}
else if(studentGrade >=73 || studentGrade <=79) //If statement to check and see if the number given is in between those amounts
{
 console.log("You have a " + studentGrade + ", which means you have earned a(n) " + gradingScale[2]); //Prints the statement
}
else if(studentGrade >= 70 || studentGrade <=73) //If statement to check and see if the number given is in between those amounts
{
 console.log("You have a " + studentGrade + ", which means you have earned a(n) " + gradingScale[3]); //Prints the statement
}
else if(studentGrade <= 69) //If everything else is not true it prints this
{
 console.log("You have a " + studentGrade + ", which means you have earned a(n) " + gradingScale[4]); //Prints the statement
}

/*
 The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get
 the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the
 discounted price. Determine which of the two prices the customer is eligible for.
 */

var age = prompt("How old are you?"); //Ask the user how old they are
age = parseInt(age); //Use parseInt to change the string into a number
var tod = prompt("What time is the movie?"); //Ask what movie time their movie is going to be played
tod = parseInt(tod); //Use parseInt to change the string into a number

var movie = ["$12.00", "$7.00"]; //The array to hold the string amounts

if(age <= 10 || age >=55) //If statement to check and see if the age is below 10 and above 55 to get the discount
{
 console.log("The ticket price is " + movie[0] + "!"); //Prints the statement
}
else if(tod >=3 || tod <=5) //If statement to check and see if the movie is in the time slot of 3 and 5 pm
{
 console.log("The ticket price is " + movie[0] + "!"); //Prints the statement
}
else //If the other statements are false
{
 console.log("The ticket price is " + movie[1] + "!"); //Prints the statement
}








