/*
 Jacob Nigh
 1/13/15
 Nigh_Jacob_Arrays
 */

//alert("Making sure this thing works.");

//Lets create a basic array

var avengers = ["Thor", "Captain America", "Iron Man"];

//Print to console

console.log(avengers);

//Print one name to console

console.log(avengers[1]);

//Switching index 2 for spider-man

avengers[2] = "Spoder-man";

console.log(avengers);

//Adding a team member to the array

avengers[3] = "Black Widow";

console.log(avengers);

//Use a variable as an index number

var num = 2;

console.log(avengers[num]);

//Creating a length property
// .Syntax is fancy for use a period

console.log(avengers.length);

//last index number is the length minus 1

//Recruit a new team member

avengers[avengers.length] = "Power Man";

console.log(avengers);


//New array track oranges and see how many we have

var orangeBins = [12, 20, 14];

//How many oranges did we pick


var total = orangeBins[0] + orangeBins[1] + orangeBins[2];

console.log(total + " total orange bin(s) collected.");

//Advanced arrays

var fruitBowl = ["Orange", "Tomato", "Strawberry"];

// Property Length = how many items are in the array

console.log(fruitBowl.length + " item(s) in our fruit bowl.");

//Method of arrays

//Push inserts an item at the end of the array

//arrayname.push(item to push);

fruitBowl.push("Apple");
console.log(fruitBowl);

fruitBowl.push("Kiwi");
console.log(fruitBowl);

//Pop takes off last item in an array and returns it

var caught = fruitBowl.pop(); //create a variable to catch the returned value
console.log(fruitBowl);

console.log(caught);

var caught2 = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught2);

//splice = used to removing or adding items into an existing array

//arrayname.splice( starting position, items to remove, items to add);

fruitBowl.splice(2,0,"Banana");
console.log(fruitBowl);

fruitBowl.splice(1,1,"Kiwi");
console.log(fruitBowl);

//Adding more items

fruitBowl.splice(1,0,"Orange", "Apple", "Grapes");
console.log(fruitBowl);

