var scoreOfString = function (s) {

    
    let a = s.split("").map(l => l.charCodeAt())
    
    a

    let count=0
    
    // the index starts at *1* without an initialValue
    return a.reduce((sum,curr,currIndex, array) => count += Math.abs((array[currIndex-1]) - curr))



    console.log(a)

    return sum
}


console.log(scoreOfString("hello"), 13)

//'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.