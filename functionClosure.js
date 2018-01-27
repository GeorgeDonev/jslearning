

function multiplier(factor){
    return function (number) { return number * factor; }
    //multiplier() returns a function number, that in turn returns the output of an operation
}

var twice = multiplier(2); //making the input of multiplier 2
console.log( twice(5) ); //calls fucntion "multiplier" to




//____________________________________________________________________________

//demonstration of how a function can return a function that
function wrapValue(number) {
    var localVariable;
    localVariable = number;
    return function() {return localVariable;} //the return of wrapValue is a function
}

var wrap1 = wrapValue(1); //the return as a function allows to feed a value for wrapValue and then use to -
//-execute the
var wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());
