/*
 *Jacob Nigh
 *Jan 22, 2015
 *arguments and parameters
 */

//alert("Testing");

//arguments goes into the function call
//parameters goes into the function definition
//must have the same number of arguments and parameters

//create a function to calculate the area of a rectangle.

function calcArea(w, h)
{
    //var width = 10;
    //var height = 20;
    //var area = width * height;
    
    
    var area = w * h;
    console.log("The area is " + area + ".");
}

calcArea(10, 20);


//caclulate dog years
//put in human years and get out dog years
var humanYears = prompt("Enter your age.");
humanYears = parseInt(humanYears);
function dogYears(h)
{
    
    var dogAge = h * 7;
    console.log("Your age in dog years is " + dogAge + ".");
}
dogYears(humanYears);