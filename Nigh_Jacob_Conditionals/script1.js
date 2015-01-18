/*
 *Jan 17 1015
 *Jacob Nigh
 *Nigh_Jacob_Math
*/

//alert("JavaScript works!");

var suitPrice1 = prompt("Enter the first amount of the first suit: ");
if (suitPrice1 == "" || NaN)
{
    alert("You have not entered a price for your first suit, please try again.");
    suitPrice1 = prompt("Enter the first amount of the first suit: ");
}
else
{
    suitPrice1 = parseInt(suitPrice1);
    Console.log("This is your first suit price");
}
