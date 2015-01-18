/*
 *Jan 17 1015
 *Jacob Nigh
 *Nigh_Jacob_Math
*/

//alert("JavaScript works!");

//You have $5,000.00 dollars in your bank account and you are checking with your bank to see if you can afford that item.

var item1 = prompt("How much is your first item?");
var item2;
var item3;

if (item1 <= 5000)
{
    console.log("Yes, you can afford this item.");
        
    {
        item2 = prompt("How much is your second item");
        item2 = parseInt(item2);
        
        if (item2 <= item1 - 5000)
        {
            console.log("Yes, you can afford your second item");
        }
        else
        {
            console.log("Im sorry, you cannont afford this item.");
        }
    }
}