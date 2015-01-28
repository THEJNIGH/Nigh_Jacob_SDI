/*
 *Jacob Nigh
 *Jan 22, 2015
 *return
 */

//alert("Testing");

//calculate area of rectangle
//catch to get the return value


function area(w, h)
{
    var total = h * w;
    //return area value to the main code.
    return total;
    //does not return the variable itself
    //console.log("The area of the rectangle is " + total);
}
var returnedArea = area(9, 77);
console.log(returnedArea);

//caclulate area of circle
//3.14*r*r


function circleArea(r)
{
    var total = Math.PI * r * r;
    return total;
}
var totalArea = circleArea(6);
console.log(totalArea);

//2 circles

var twoArea = totalArea * 2;
console.log("The area of both circles is " + twoArea.toFixed(2));

var userRad = prompt("Please enter a radius.");
userRad = parseInt(userRad);
var userResults = circleArea(userRad);
console.log("The new radius is " + userResults);

//ask user for radius

