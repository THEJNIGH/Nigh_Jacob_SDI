/*
 *Jacob nigh
 *Jan 29, 2015
 *SDI
 *Nigh_Jacob_FinalPart2
*/

//alert("Testing"); created an alert to test wether the pages were connected or not.

var item = prompt("What is the price of your item?"); // Created a variable to hold the users answer to my question "What is the price of your item?".
while(isNaN(item) || item === "") // Created a validation statement to see if the user put in the information I wanted.
{
    item = prompt("Im sorry I did not get a nubmer, please enter the price of your item."); // The statement appears again if the user did not enter the correct information needed.
}
var dis = prompt("What is the discount of your item?"); // Created a variable to hold the users answer to my question " What is the discount of your item?".
while(isNaN(dis) || dis === "" || dis > 100 || dis < 0) // Created a validation statement to see if the user put in the information I wanted.
{
    dis = prompt("Im sorry I did not get a number, please enter the discount of your item."); // The statement appears again of the user did not enter the correct information needed.
}

function totalPrice(cost, disc) // Created a function to do the math for this problem.
{
    var total = cost * (disc / 100); // Created a variable to hold cost * disc / 100
    var trueTotal = cost - total; // Created another variable to get the sale price after the discount is added in.
    return trueTotal; // Returned the value of trueTotal to get the sale price.
}
var results = totalPrice(item, dis); // Created a variable to get the returned amount from the function of totalPrice.
console.log("The final cost of an item that cost $" + item + " with a discount of " + dis + "% is $" + results + "."); // console.log all of the information together with concatination and strings.