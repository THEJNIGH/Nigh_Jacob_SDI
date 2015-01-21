/*
    *Jan 17 1015
    *Jacob Nigh
    *Nigh_Jacob_Beer
*/

//alert("JavaScript works!");

//99 bottles of beer on the wall

for(var beer = 99; beer > 0; beer--)
{
    //console.log("There are " + beer + " bottle(s) of beer on the wall. Take it down pass it around.");
    //add check for last round of beers
    if (beer === 1)
    {
        console.log("Last round. Past it around. There's only " + beer + " left. There are no more bottles of beer on the wall. \n The End.");

    }
    else
    {
        console.log("There are " + beer + " bottle(s) of beer on the wall. Take it down pass it around.");
    }
}
