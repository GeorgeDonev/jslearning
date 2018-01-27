/**
 * Created by x on 7/4/17.
 */
function wrapValue(number) {
    var localVar = number;
    return function() {return localVar;} //the return of wrapValue is a function
}

var wrapper = wrapValue(2);
console.log(wrapper());