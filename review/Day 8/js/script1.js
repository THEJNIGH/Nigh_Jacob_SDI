/*
 *Jacob Nigh
 *Jan 22, 2015
 *Validating
 */

//alert("Testing");

//Looping arrays

//for(var i = 0; i < array.length; i++){condition}

var names = ["Scooby", "Shaggy", "Velma", "Fred"];

for(var i = 0; i < names.length; i++)
{
    console.log(i);
    console.log(names[i]);
    console.log("You solve the case " + names[i]);
}

//create an array of bills and add them up

var bills = [50, 10, 5, 20, 10];
//create a variable to hold the values.
var total = 0;
for(var j = 0; j < bills.length; j++)
{
    //add each individual bill to the total
    //total = total + bills[j];
    //bills that are equal to or greater than 20 dollars
    if (bills[j] >= 20)
    {
        total += bills[j];
    }
}
console.log("The total amount of the bills are " + total + ".");