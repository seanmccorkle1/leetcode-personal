var scoreOfString = function (s) {

    
    let a = s.split("").map(l => l.charCodeAt())
    
    a

    let count=0
    return a.reduce((sum,curr,index, array) => count += Math.abs((array[index-1]) - curr))



    let sum = 0

    a


    for (let index=1; index < a.length; index++) {

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

//'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.