/*
 *Jacob Nigh
 *Jan 24, 2015
 *Nigh_Jacob_Functions_Assignemt
 */

//alert("Testing");

// Doing how much damage is done over time on a target champion

var currentDamage = prompt("What is the current damage you have right now?");
currentDamage = parseInt(currentDamage);
while(isNaN(currentDamage) || currentDamage === "")
{
    currentDamage = prompt("Please dont not leave blank and only use numbers \n What is the current damage you have right now?");
}
var coolDown = prompt("What is the cool down on for your auto attack?");
coolDown = parseInt(coolDown);
while(isNaN(CoolDown) || coolDown === "")
{
    coolDown = prompt("Please dont not leave blank and only use numbers \n What is the cool down on for your auto attack?");
}
var activiationTime = prompt("How long does it take for the auto attack animation to complete?");
activiationTime = parseInt(activiationTime);
while(isNanN(activiationTime) || activiationTime === "")
{
    activiationTime = prompt("Please dont not leave blank and only use numbers \n How long does it take for the auto attack animation to complete?");
}

function overTime(ad, cd, at)
{
    
}