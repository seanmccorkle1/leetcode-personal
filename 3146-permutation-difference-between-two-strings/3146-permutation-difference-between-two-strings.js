var findPermutationDifference = function(string, string2) {
    
    let sum=0
  
    for (let index=0; index < string.length; index++){

        let index2=string2.indexOf(string[index])      
      
        sum += Math.abs(index2-index)
    }
    return sum
}

// console.log(findPermutationDifference("sss","rrr"))

console.log(findPermutationDifference("abc", "bac"), 2)
console.log(findPermutationDifference('abcde', 'edbac'), 12)