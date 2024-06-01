var scoreOfString = function (s) {

    let a = s.split("")
    
    a = a.map(l => l.charCodeAt())
    
    
    let sum = 0

    a

    for (let index=1; index  < a.length; index++) {

        const num = a[index]

        Math.abs(sum+num)
        
        sum += Math.abs(a[index-1] - a[index])

        sum

    }


    console.log(sum)
    console.log(a)

    return sum
}


console.log(scoreOfString("hello"), 13)