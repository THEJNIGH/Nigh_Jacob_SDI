/*
    *Jan 17 1015
    *Jacob Nigh
    *Nigh_Jacob_While loops
*/

//alert("JavaScript works!");

//Basic while loop
// The while loops through a block of code as long as a condition is true.

/*var i = 0
 *while(condition is true)
 *{
 *  condition;
 *  i++; infinite loop
 *}
 *
 */

var counter = 0;
while(counter < 20)
{
    console.log(counter + " Somethings just never end."); //code that runs when ever its less than 20
    counter++;
}

//do while loop
// code will run at least once before checking the condition.

var i = 20;
do
{
    //This code will run before the condition is checked.
    //It will also run aslong as the condition is true.
    console.log("The number is " + i);
    i++
}
while(i < 10);
