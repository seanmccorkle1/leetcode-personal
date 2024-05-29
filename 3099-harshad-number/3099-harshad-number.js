
var sumOfTheDigitsOfHarshadNumber = function(x) {
    
    let digit_sum = x.toString()
    .split("").reduce(callback,0)
    
        // .reduce((a,b)=>a + Number(b),0)

    if (x % digit_sum == 0){
        return digit_sum
    }

    return -1
}


callback=(a,b)=> a+Number(b)

// function callback(a,b) { 
//     return a+Number(b)
    
//     // (a, b) => Number(a) + Number(b)
// }

sumOfTheDigitsOfHarshadNumber(18) // should return 9, the sum of the digits since




