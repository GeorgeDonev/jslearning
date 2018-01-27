/**
 * Created by x on 7/4/17.
 */
function power(base, exponent) {

    if (exponent === 0)
        return 1;

    else
        return base * power(base, exponent -1) ;

}

console.log(power(2, 4));
console.log(power(3, 7));
console.log(power(6, 3));

function power1(base1, exponent1){
    if(exponent1 === 0)
        return 1;
    else
        return base1 * power(base1);
}
console.log(power(2,3));

//infinity new numbers produced, by either adding 5 or multiplying by 3

function findSolution(target) {
    
    function find(start, history){
        if (start === target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + "+5)") ||
                   find(start * 3, "(" + history + "* 3)");
    }
    return find(1, "1");
}
console.log(findSolution(13));
