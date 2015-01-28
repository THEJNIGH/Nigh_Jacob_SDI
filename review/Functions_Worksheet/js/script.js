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
    radii = prompt("Please enter an amount. \n What is the radius of your cricle?");
}
function circleC(r)
{
    var total = 2 * Math.PI * r;
    return total;
}
radii = parseInt(radii);
var totalArea = circleC(radii);
console.log("The circumfrence of your circle is " + totalArea.toFixed(2) + ".");

//Stung!!

var deadly = prompt("How much does your animal weigh?")
while(isNaN(deadly) || deadly ==="")
{
    deadly = prompt("Please enter a value. \n How much does your animal weigh? (in pounds)");
}
function stings(w)
{
    var death = w * 8.666666667;
    return death;
}
deadly = parseInt(deadly);
var deadlyDeath = stings(deadly);
console.log("The amount of bee stings need to kill your animal is " + deadlyDeath.toFixed(2));
