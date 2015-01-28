/*
 *Jacob Nigh
 *Jan 22, 2015
 *Validating
 */

//alert("Testing");

//variable scope
//variables inside and outside of a function
//try not to use the same variable names
//however in large files this is going to be impossible
//variables created inside of fucntions call only be seen inside of those functions

//variable for width in our main code.

var width = 5; //scoped outside of the function for main code
//create a functions that calculates the primeter of a rectangle.

function calcPeri()
{
    var width = 10;//it scoped to the function calcPri
    console.log("Inside of the function the value of width is " + width);
    var height = 20;
    var perimeter = width * 2 + height * 2;
    console.log("Inside of function the perimeter is " + perimeter);
}
console.log("Before call " + width);
calcPeri();
console.log();
