/*
 *Jacob Nigh
 *Jan 22, 2015
 *Nigh_Jacob_Functions_Worksheet
 */

//alert("Testing");

//Circumference

var radii = prompt("What is the radius of your circle?")
while(isNaN(radii) || radii === "")
{
    radii = prompt("Please enter an amount. What is the radius of your cricle?")
}
function circleC(r)
{
    var total = 2 * Math.PI * r;
    return total;
}
radii = parseInt(radii);
var totalArea = circleC(radii);
console.log(totalArea);