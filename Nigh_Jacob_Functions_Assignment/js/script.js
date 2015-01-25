/*
 *Jacob Nigh
 *Jan 24, 2015
 *Nigh_Jacob_Functions_Assignemt
 */

//alert("Testing");

// Doing how much damage is done over time on a target champion
var character = prompt("Which character do you choose 1 or 2?")
var currentDamage = prompt("What is the current damage you have right now?");
while(isNaN(currentDamage) || currentDamage === "")
{
    currentDamage = prompt("Please dont not leave blank and only use numbers \n What is the current damage you have right now?");
}
var coolDown = prompt("What is the cool down on for your auto attack?");
while(isNaN(coolDown) || coolDown === "")
{
    coolDown = prompt("Please dont not leave blank and only use numbers \n What is the cool down on for your auto attack?");
}
var activiationTime = prompt("How long does it take for the auto attack animation to complete?");
while(isNaN(activiationTime) || activiationTime === "")
{
    activiationTime = prompt("Please dont not leave blank and only use numbers \n How long does it take for the auto attack animation to complete?");
}

function overTime(ad, cd, at)
{
    var total = at + cd / ad;
    return total;
    
}

function characterAA(one, two)
{
    var character1;
    if (parseInt(character1) === 1)
    {
        var results2 = 1.5 * total;
    }
    else if (character2)
    {
        var results3 = 1.75 * total;
    }

    return results2;
    return results3;
    
}
var results2 = characterAA(one, two)
var results1 = overTime(parseInt(currentDamage), parseInt(coolDown * 100), parseInt(activiationTime * 100));
console.log("Your current DPS is " + results1 + );

