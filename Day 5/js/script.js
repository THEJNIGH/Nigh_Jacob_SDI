/*
 Jacob Nigh
 1/13/15
 Nigh_Jacob_Day 5 Conditionals
 */

//alert("testing");

// Basic conditional statement
// Create a boolean variable to test.
// Is the child

var oldEnough = Boolean(false);

// If the child is old enough then print to the console you can ride.

/*
Basic structure of if statement
if(Condition to test)
 {
  runs if the condition is true;
 }
else
 {
  runs if the condition above is false.
 }
 */
if(oldEnough)
{
  //code inside curly brackets if test is true.
  //This code will be skiped if test is false.
  console.log("You can ride the roller coaster.");
}
else
{
 console.log("You cannont ride the roller coaster.");
};
console.log("What if you skip all of this.");

// If the kid is over 48 inches tall then he can ride.

var kidHeight = 47;
var minHeight = 48;
var shoeLift = 2;
// Is the child tall enough with shoe lift?


if(kidHeight + shoeLift > minHeight)
{
 console.log("You are tall enough to ride the roller coaster.");
}
else
{
 // This code will run if the the test is false.
 console.log("Im sorry, you are not tall enough to ride this ride.");
}

// What ride can the kid go on based on his height.
// if kid is 48 space mountain
// if kid is 40 buzz light year ride
// anything shorter Winnie the pooh.

var childHeight = 42;

if(childHeight >= 48)
{
 console.log("You can ride Space Mountain, Buzz Lightyear, and Winnie the Pooh")
}
else if(childHeight >= 40)
{
 console.log("You can ride the Buzz Lightyear, and Winnie the Pooh.")
}
else
{
 console.log("You are not tall enough to ride all the other rides so you must ride the Winnie the Pooh ride.")
};

/*
if
else if
else statement

if(condition1)
{
 code to run if true.
}
else if(condition2)
{
 code if first condition is false.
}
else
{
 catch all
};
 */

