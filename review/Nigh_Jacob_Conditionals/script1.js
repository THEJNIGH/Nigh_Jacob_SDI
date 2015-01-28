/*
 *Jan 17 1015
 *Jacob Nigh
 *Nigh_Jacob_Math
*/

//alert("JavaScript works!");

//You want to purchase suit for an upcomming event but you have bills coming up. Find out if your budget is enough to get the suit and to pay both bills.

var suitPrice = 800;
var suitPrice2 = 400;
var budget = prompt("How big is your budget?");
var bill1 = prompt("What is the price of the first bill?");
var bill2 = prompt("What is the price of the second bill?");

var money = [budget, bill1, bill2];
var billTotal = money[1] + money[2];
var total = money[0] - billTotal;
var final = total - suitPrice;
var final2 = total - suitPrice2;
var suitTotal = suitPrice + suitPrice2;

if (budget === "")
{
    alert("Please enter the amount again.");
    budget = prompt("How big is your budget: ");
    
    if (bill1)
    {
        alert("Please enter the amount agian.");
        bill1 = prompt("What is the price of uour first bill: ");
    
        if (bill2)
        {
            alert("Please enter the amount agian.");
            bill2 = prompt("What is the price of your second bill: ");
        }
    }
}

/*if (budget === "")
{
    alert("Please enter the amount again.");
    budget = prompt("How big is your budget: ");
}
else if (bill1 === "")
{
    alert("Please enter the amount agian.");
    bill1 = prompt("What is the price of uour first bill: ");
}

else if (bill2 === "")
{
    alert("Please enter the amount agian.");
    bill2 = prompt("What is the price of your second bill: ");
}
*/


(final >= 400 && final <=799)?console.log("You can purchase the second suit which is $" + suitPrice2 + "."):console.log("You might be able to purchase the more expensive suit, lets have a look.");

if (final + final2 >= 1200)
{
    console.log("you can purchase both suits which comes to a grand total of $" + suitTotal + ".");
}
else if (final2 >= 800)
{
    
    console.log("You can purchase the first suit that is worth $" + suitPrice + ".");
}
else
{
    console.log("You do not not have enough money in your budget to purchase either suits, Im sorry.");
};





