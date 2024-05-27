var sumOfTheDigitsOfHarshadNumber = function(x) {
    

    digit_sum = x.toString().split("").reduce((a,b)=>a+Number(b),0)
    // let digit_sum =  [...x.toString()].map(stringnum=>Number(stringnum)).reduce((sum,curr)=>sum+curr,0)
    
    if (x%digit_sum == 0){
        return digit_sum
    }

    return -1
}

sumOfTheDigitsOfHarshadNumber(18)