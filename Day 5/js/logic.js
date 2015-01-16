/*
 Jacob Nigh
 1/13/15
 Nigh_Jacob_Day 5 Logical Operators
 */

//alert("testing");

/*
 true && true = true
 true && false = false
 false && true = false
 false && false = false

 true || true = true
 true || false = true
 false || true = true
 false || false = false

 !true = false
 !false = true
 */

// If the of the 3ds is less than our budget lets buy it.
//and if paycheck is over 500 dollars

var budget = 200;
var dsPrices = 169;
var payCheck = 600;

if(dsPrices < budget && payCheck > 500)
{
 console.log("You can buy the Nintendo 3DS.");
}
else
{
 console.log("You dont have enough money.")
};

//Lets buy a smart TV if it is less than our budget or we won the lottery.

var tvPrice = 540;
var tvBudget = 500;
var wonLottery = false;

if(tvBudget > tvPrice || wonLottery)
{
 console.log('You can purchase the smart TV.')
}
else
{
 console.log("You dont have enough money to purchase the TV.")
}
