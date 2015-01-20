/*
    *Jan 17 1015
    *Jacob Nigh
    *Nigh_Jacob_for loops
*/

//alert("JavaScript works!");

//Basic for loop structure

/*
 *for(initiazation; test; )
 *{
 *   condition to test;
 *   incerement of change++;
 *
 *  code to run as long as the condition is true
 *}
 */

for (var i = 0; i < 20; i += 4)
{
    //code to run as long as less than 20
    console.log("The value of i = " + i);
}

for (var k = 0; k < 5; k++)
{
    console.log("The value of k is = " + k);
    
    if (k === 3)
    {
        break;
    }
}