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

avengers[2] = "Spider-man";

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