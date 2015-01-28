/*
    *Jan 27 1015
    *Jacob Nigh
    *Nigh_Jacob_Day 10 review
*/

//alert("JavaScript works!");

//calculate how much pizza cost per square inch and how much is it per slice.
//prompt user for radius of pizza
//prompt user for cost of pizza
//promtp user for number of slices per pizza

var radius = prompt("What is the radius of your pizza?");
while(isNaN(radius) || radius === "")
{
    radius = prompt("Im sorry please enter the radius of your pizza.");
}
var cost = prompt("What was the cost of your pizza?");
while(isNaN(cost) || cost === "")
{
    cost = prompt("Im sorry please enter the cost of your pizza.");
}
var numberSlices = prompt("How many slices of pizza are there?")
while(isNaN(numberSlices) || numberSlices === "")
{
    numberSlices = prompt("Im sorry please enter how many slices of pizza are there.")
}
//create a function that calculates the area of the pizza

function pizzaArea(r)
{
    var area = Math.PI * r * r;
    return area;
}
//create a function that calculates the price per square inch of pizza.
function squareInch(price, area)
{
    var cost = price / area;
    cost = cost.toFixed(2);
    return cost;
}
//create a function that calculates the price per slice of pizza.
function pricePerSlices(cost, slice)
{
    var price = cost / slice;
    price = price.toFixed(2);
    return price;
}
//function to start all the other functions.
function callAll(radius, cost, numberSlices)
{
    var area = pizzaArea(radius);
    var cost1 = squareInch(cost, area);
    var number = pricePerSlices(cost, numberSlices);
    return [area, cost1, number];
}
//function call to call all the other fucntions
var results = callAll(radius ,cost, numberSlices);
console.log("Your pizza per square inch costs " + results[1] + ". That comes out to " + results[2] + ".");