/*
 *Jacob Nigh
 *Jan 24, 2015
 *Procedure
 */

//alert("Testing");

// This is a basic function
function calcArea(w, h)
{
    var area = w * h;
    return area;
}
var results = calcArea(4, 5);
console.log(results);

//This is a procedure and it does not return a value pretty much a list of steps.
function calcAreaP(w, h)
{
    //calculations
    var area = w * h;
    console.log(area);
    //It will not have a return.
}

//fucntion call for a procedure.
calcAreaP(6, 7);