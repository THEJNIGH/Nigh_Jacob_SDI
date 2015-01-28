/*
    *Jan 17 1015
    *Jacob Nigh
    *Nigh_Jacob_Zombie attack
*/

//alert("JavaScript works!");
//There is a zombie at fullsail. It can bite four people a day and turn them into zombies. Now CDC wants to know how many zombies will be in 8 days

var numZombies = 1; // How many zombies do we have.
var numBites = 4; // How many bites per zombie per day.
var dayZ = 8; // Number of days

/*
    for(var i = 1; i <= dayZ; i++)
{
    // What to know how many zombies and bites
    // bitten and then they can bite.
    // new zombies everyday
    var newZombies = numBites * numZombies;
    
    //update total number of zombies at the end of the day.
    numZombies += newZombies;
    
    // Report at the end of the day
    console.log("There are " + numZombies + " zombies at the end day #" + i);
}
*/
var dayZtakes = 0;
while(numZombies <= 1000000)
{
    var newZombies = numBites * numZombies;
    numZombies += newZombies;
    dayZtakes++;
    console.log("It took " + dayZtakes + " number of days to get to " +  numZombies + ".");
}