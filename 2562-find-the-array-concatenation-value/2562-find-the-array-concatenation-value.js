/**
 * @param {number[]} nums
 * @return {number}
 */

var findTheArrayConcVal = function(nums) {
    
    const array=[]
    let realSum = 0
    
    while (nums.length != 0){
        
        let firstNum=nums.length ? nums.shift() : ""
        let lastNum=nums.length ? nums.pop() : ""
        
        let concatString = String(firstNum) + String(lastNum)
        realSum += Number(concatString)
        // array.push(Number(concatString))
    }

    return realSum  
    return array.reduce((a,b)=>a+b,0)
}

// [7, 52, 2, 4] 
// "74"

// [52, 2]
// "522"

// 522 + 74 = 596