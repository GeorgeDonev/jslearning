/**
 * Created by x on 6/14/17.
 */
var x = 100;
var Square = function (x) {
    return x * x;
};
//a fucntion is a regular variable definition with the value being a function
console.log(Square(x));

function cubed(x) {
    return x*x*x;
}

console.log(cubed(x));


//let's blow this stack!
function chicken(){
    return egg();
}

function egg(){
    return chicken();
} // <- "Maximun call stack size exceeded" AKA Blowing the stack

console.log(chicken() + " \n which came first?");
// REMEMBER!!! : chicken =\= chicken() <- Always check the function name!
// a function value is not the function's' name. Be careful!
//"chicken" will display the function that is "chicken" in contents
//chicken() will execute the function