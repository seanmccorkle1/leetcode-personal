// 20 elements, remove 1 number from both ends
// 40 elements, remove 2 numbers 

const trimMean =(array)=> {
    
    array.sort((a,b) => a - b)
    
    let fivePercentAsInteger = array.length * .05
    
    const arrayWithoutOutliers= array.slice(0 + fivePercentAsInteger, array.length - fivePercentAsInteger)
    
    let sumWithoutOutliers= arrayWithoutOutliers.reduce((sum,curr)=>sum+curr,0) 
    
    return sumWithoutOutliers / (array.length * .9)
}

console.log(
    trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]), 4)

// console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]), 2)