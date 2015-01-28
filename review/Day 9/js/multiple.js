/*
 *Jacob Nigh
 *Jan 24, 2015
 *Multiple
 */

//alert("Testing");

//prompt user for width and height and the calculate the area and the perimeter of a rectangle

function areaRect(w, h)
{
    //area of rectangle is width times height
    var area = w * h;
    return area;
}

//set up perimeter function

function periRect(w, h)
{
    //perimeter is 2h+2w
    var perimeter = w * 2 + h * 2;
    //return value
    return perimeter;
}

var height = prompt("What is your height of your rectangle?");
while(isNaN(height) || height === "")
{
    height = prompt("Please do not leave blank and only use numbers. \n What is your height of your rectangle?");
}
var width = prompt("What is your width of your rectangle?");
while(isNaN(width) || width === "")
{
    width = prompt("Please do not leave blank and only use numbers. \n What is your width of your rectangle.");
}

//call both functions 1 at a time

var resultsArea = areaRect(width, height);
var resultsPeri = periRect(width, height);
console.log("The area of your rectangle is " + resultsArea + "." + " The perimeter is " + resultsPeri + ".");

// combined function to do both

function combined(w, h)
{
    var area = w * h;
    var perimeter = w * 2 + h * 2;
    return [area, perimeter];
}

var combinedResults = combined(width, height);
console.log("The area of your rectangle is " + combinedResults[0] + "." + " The perimeter is " + combinedResults[1] + ".");