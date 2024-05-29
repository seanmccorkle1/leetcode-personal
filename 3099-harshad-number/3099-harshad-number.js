var log = function (...args) {
    // Do something with args, for example, logging them

    // console.log(...[args].join("|"))

    console.log([...args].join("|"))
}

log("log1", "log2")


var sumOfTheDigitsOfHarshadNumber = function (x) {

    let digit_sum = x.toString()
        .split("").reduce(callback, 0)

    // .reduce((a,b)=>a + Number(b),0)

    if (x % digit_sum == 0) {
        return digit_sum
    }

    return -1
}

// var callback = (a,b) => {

function callback(a,b) { 
    return a+Number(b)

    // (a, b) => Number(a) + Number(b)

}

console.log(sumOfTheDigitsOfHarshadNumber(18), 9) 

// should return 9, the sum of the digits since