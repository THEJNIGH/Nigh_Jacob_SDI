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
 };
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