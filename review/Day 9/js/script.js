/*
 *Jacob Nigh
 *Jan 22, 2015
 *arguments and parameters
 */

//alert("Testing");

// create variables for min and max value

var min = prompt("Please enter a min value");
min = parseInt(min);
// validate min prompt
while(isNaN(min) || min === "")
{
    min = prompt("Please dont not leave blank and only use numbers \n Please enter a min value");
}

var max = prompt("Please enter a max value");
while(isNaN(max) || max === "" || min >= max)
{
    if (isNaN(max))
    {
        max = prompt("Please only use numbers. \n Please enter a max value");
    }
    else if (max === "")
    {
        max = prompt("Please do not leave blank. \n Please enter a max value");
    }
    else
    {
        max = prompt("The max value must be greater than the min value. \n Please enter a max value");
    }
    
}
// create function


function randomizer(mn, mx)
{
    // generate our random number.
    
    var randomNum = Math.round(Math.random() * (mx - mn) + mn);
    //return random number to our main code
    
    return randomNum;
}
// function call but create a variable to catch the return variable
var ranNum = randomizer(min, max);
console.log("Your random number between " + min + " and " + max + " is " + ranNum + ".");


// 15 random numbers between our min and max

for(var i = 0; i < 15; i++)
{
    console.log(randomizer(min, max));
}