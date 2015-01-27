/*
 *Jacob Nigh
 *Jan 24, 2015
 *Nigh_Jacob_Functions_Assignemt
 */

//alert("Testing");

// Doing how much damage is done over time on a target champion
var character = parseInt(prompt("Which character do you choose 1 or 2?"));//Asking the user to choose character 1 or 2 and creating a variable to hold that answer.
while(isNaN(character) || character === "")//Created a while loop to make sure that the user put in the right information that I asked for.
{
    character = prompt("Please dont not leave blank and only use numbers \n Which character do you choose 1 or 2");//Just reprompting if the user did not enter the correct information and it s a loop so it keeps going until the user get the information I want.
}
var currentDamage = prompt("What is the current damage you have right now?");//Asking the user to enter their current damage that they have right now and created a variable to hold that answer.
while(isNaN(currentDamage) || currentDamage === "")//Created a while loop to make sure that the user put in the right information that I asked for.
{
    currentDamage = prompt("Please dont not leave blank and only use numbers \n What is the current damage you have right now?");//Just reprompting if the user did not enter the correct information and it s a loop so it keeps going until the user get the information I want.
}
var coolDown = prompt("What is the cool down on for your auto attack?");//Asking the user to enter the cool down on their auto attack move and created a variable to hold that answer.
while(isNaN(coolDown) || coolDown === "")//Created a while loop to make sure that the user put in the right information that I asked for.
{
    coolDown = prompt("Please dont not leave blank and only use numbers \n What is the cool down on for your auto attack?");//Just reprompting if the user did not enter the correct information and it s a loop so it keeps going until the user get the information I want.
}
var activiationTime = prompt("How long does it take for the auto attack animation to complete?");//Asking the user how long it takes for their auto attack animation to stop and created a variable to hold that answer.
while(isNaN(activiationTime) || activiationTime === "")//Created a while loop to make sure that the user put in the right information that I asked for.
{
    activiationTime = prompt("Please dont not leave blank and only use numbers \n How long does it take for the auto attack animation to complete?");//Just reprompting if the user did not enter the correct information and it s a loop so it keeps going until the user get the information I want.
}

function overTime(ad, cd, at)//This is a function that holds variables ad, cd, at.
{
    var total = at + cd / ad;//Created a variable called total to hold that math need to get the answer towards the end. 
    return total;//Returned the variable that is created to do math.
    
}

var characterAA = function(o, r)//Created an anon function that holds the variables o and r
{
    if (o === 1)//Created an if else if statement to get the first question asked answer. It now takes that variable and puts in this function.
    {
        oTotal = r * 1.75;//Created a variable called oTotal that holds the answer to the math used from the results1.
        return oTotal;//Returned the variable that is created to do math.
    }
    else if (o === 2)//Else if the user does not enter 1 then the else if runs and returns the damage for the second multipier.
    {
        oTotal = r * 1.33;//Created a variable called oTotal that holds the answer to the math used from the reuslts1.
        return oTotal;//Returned the variable that is created to do math.
    }
    
};
var results1 = overTime(parseInt(currentDamage), parseInt(coolDown * 100), parseInt(activiationTime * 100));//Created the call for my first function also did math if the user enters a decimal to get the correct answer. 
var overAll = characterAA(character, results1);//Caleed the anon function and used the results from the user is put into there as an argument.
console.log("Your current DPS is " + results1 + ". Since you chose character " + character + ", so now you have " + overAll.toFixed(2));//Console.log to print out the whole line with the answer, what character they chose, and the now amplfied damage.


//I put in both results for these numbers obviously varying on the fact if they choose character 1 and 2 but the three numbers where
// How much damage = 100
// Cooldown = .25
// animation time = .75
//Your current DPS is 75.25. Since you chose character 1, so now you have 131.67
//Your current DPS is 75.25. Since you chose character 2, so now you have 100.08

