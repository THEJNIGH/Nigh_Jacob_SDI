/*
 *Jacob Nigh
 *Jan 22, 2015
 *Validating
 */

//alert("Testing");

//What happens if the user leaves the entry blank? It returns an empty text string

var movie = prompt("What is your favorite movie?");
while(movie === "")
{
    //user left prompt blank and we are going to reprompt the user.
    movie = prompt("Please dont leave blank. What is your favorite movie?");
}


//test to see if the user typed in a number or not
//text strings return true numbers return false

var ticketPrice = prompt("How much is a movie ticket?");
while(isNaN(ticketPrice))
{
    //user did not enter number reprompt for number.
    ticketPrice = prompt("Please enter a number. How much is a movie ticket");
}


//use both vaildations for a while loop

var age = ("To get into R rated movies we must know your age. \n How old are you?");
//validate that is the prompt is not black and is a number
while(isNaN(age) || age === "")
{
    
    age = prompt("You either entered a blank or not a number. \n To get into R rated movies we must know your age.");
}

//validate something specific

var movieGenre = prompt("Do you want to see an action movie or comedy?");
//validate if the user put in one or the other type of genres
movieGenre = movieGenre.toLowerCase();
while(movieGenre != "action" && movieGenre != "comedy")
{
    movieGenre = prompt("You did not enter either action or comedy. Please select either action or a comedy movie.");
}