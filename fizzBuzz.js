/**
 * Created by x on 6/13/17.
 */
/*
var counter = 1;
for (counter; ; counter++ ) {
    var isThree = counter % 3;
    var isFive = counter % 5;
    if (isThree === 0)
        console.log("fizz");
    else if (isFive === 0 )
        console.log("buzz");
    else if (counter < 100)
        console.log(counter);
    else
        break;
}
    console.log(counter);
*/
// for (var counter = 1; counter <= 100; counter++)
//     console.log(counter)
//     ;

//kind of works, control flow makes output not as desired
//control flow is heretical, needs to be flat
//try to use a switch case?
/*for (var counter = 1; counter < 100; counter++)
    {
        var isMultiThree = counter % 3;
        var isMultiFive = counter % 5;

        if (isMultiThree === 0) //the difference between = & ==! Single to assign, double is the equality
            console.log("fizz");
        else if(isMultiFive === 0)
            console.log("buzz")
            ;
        else if(isMultiFive === 0 && isMultiThree === 0)
            console.log("fizzBuzz!");
        else
            console.log(counter);
    }
    ; */

//with switch case, attempt #2

// for (var counter = 1; counter < 100; counter++) {
//
//     var isMultiThree = counter % 3;
//     var isMultiFive = counter % 5;
//
//     switch (counter, isMultiFive, isMultiThree) {
//         case isMultiThree === 0 && isMultiFive === 0:
//             console.log("FizzBuzz");
//             break;
//         case isMultiThree === 0:
//             console.log("Fizz");
//             break;
//         case isMultiFive === 0:
//             console.log("Buzz");
//             break;
//         default:
//             console.log(counter);
//             break;
//     }
// }


//My Final Solution! And question: "How do we get this to work with a switch?"


for (var counter = 1; counter <= 100; counter++)
{
    var isMultiThree = counter % 3;
    var isMultiFive = counter % 5;

    if (isMultiThree === 0 && isMultiFive === 0) //the difference between = & ==! Single to assign, double is the equality
        console.log("Fizz Buzz!");
    else if(isMultiThree === 0)
        console.log("Fizz");
    else if(isMultiFive === 0)
        console.log("Buzz");
    else
        console.log(counter);
}

/*

var breaker = "------------------------------";
console.log("\n" + breaker + "\n" + "Author's Solution:" + "\n");
//solution used by the author (it's very pretty):

for (var counter = 1; counter <= 100; counter++) {
    var output = "";
    if (counter % 3 === 0)
        output += "Fizz";   //re-maps variable output to be the string "Fizz"
    if (counter % 5 === 0)
        output += "Buzz";   //re-maps output to be the string "Buzz"
    console.log(output || counter);  //if either the output or counter is true, print the true statement
    }
*/

// for (var c = 1; c <= 100; c++){
//     var output = "";
//     switch (c, output){
//         case c % 3 === 0:
//             var output = "Fizz";
//             break;
//         case c % 5 === 0:
//             var output = "Buzz";
//             break;
//     }
//     console.log(output || c );
// }
//
