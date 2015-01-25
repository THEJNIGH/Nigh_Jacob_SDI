/*
 *Jacob Nigh
 *Jan 24, 2015
 *Multiple
 */

//alert("Testing");

//Anon functions
//widely used in JS and JQuery
//Important in object oriented programming
//Can be interchangable with regular functions if done right
//Saves on memory
//Very quick and easy

/*
 *Basic structure of an anon function
 *
 *var functionName = function();
 *{
 *      //code to run here   
 *}
 */



var results2 = triArea(6, 7);
console.log("Before the function results2 is " + results2 + ".");

//function call before the anon function is defined.
//var results4 = triAreaAnon(7, 8);
//console.log("Before the anon function results4 is " + results4 + ".");

function triArea(b, h)
{
    //area = 1/2Bh
    var area = .5 * b * h;
    return area;
}
var results1 = triArea(5, 6);
console.log(results1);

//anon function that calculates the area of a triangle.

var triAreaAnon = function(b, h)
{
    var area = .5 * b * h;
    return area;
};
//function call after defined of anon function
var results3 = triAreaAnon(4, 5);
console.log("The results of anon function after defined is " + results3 + ".");