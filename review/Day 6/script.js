/*
 *Jan 17 1015
 *Jacob Nigh
 *Nigh_Jacob_Math
*/

//alert("JavaScript works!");

//is a steak done theyw ay I like it.
/*
Degrees 120 under is under cooked
120-124 rare
125-131 medium rare
132-139 medium
140-149 medium well
150-165 well done
165 burnt to a crips
*/


var steakTemp = 135;

if (steakTemp < 120)
{
    console.log("Your steak is under cooked.");
}
else if (steakTemp < 124)
{
    console.log("Your steak is cooked rare.");
}
else if (steakTemp < 130)
{
    console.log("Your steak is cooked medium rare.");
}
else if (steakTemp < 140)
{
    console.log("Your steak is cooked medium.");
}
else if (steakTemp < 150)
{
    console.log("Your steak is cooked medium well.");
}
else if (steakTemp <= 164)
{
    console.log("Your steak is cooled well done.");
}
else
{
    console.log("Your steak is burnt to a crisp.");
};




var airTemp = prompt("What is the temperature outside?" , "65");
airTemp = parseInt(airTemp);
var waterTemp;


conditional to see what we are doing. 


if (airTemp >= 85)
{
    console.log("We're going to the beach!");
        
    {
        waterTemp = prompt("What is the temperature in the water?");
        waterTemp = parseInt(waterTemp);
        
        if (waterTemp >= 75)
        {
            console.log("We are also getting into the water.");
        }
        else
        {
            console.log("We are going to work on our tan today.");
        }
    }
}
else
{
    console.log("We're going to the movies.");
};


//Starting with round
//Normal round .5 and up .4 round down.

var num1 = 9.4444;
console.log(num1);
num1 = Math.round(num1);
console.log(num1);


//floor(x)
//Returns x rounded down to the nearest whole number

var num2 = 6.8;
console.log(num2);
num2 = Math.floor(num2);
console.log(num2);

//ceil(x)
//Returns x rounded up to the nearest whole number

var num3 = 4.8888;
console.log(num3);
num3 = Math.ceil(num3);
console.log(num3);

//random()
//Returns a number between 0 - 1

var num4 = Math.round(Math.random()*100);
console.log(num4)

//random number between two groups of numbers
//Math.random()*whatever max number - min number + min

var num5 = Math.round(Math.random() * (80 - 50) + 50);
console.log(num5);

var itemsArray = ["Chips ahoy", "Orea", "El Fudge", "Thin mints"];
var randomCookie = Math.floor(Math.random() * (itemsArray.length));
console.log("My current favorite is " + itemsArray[randomCookie]);

console.log(Math.PI);



