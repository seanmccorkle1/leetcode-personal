var findNonMinOrMax = function(array) {

    if (array.length<=2){
        return -1
    }

    let min = Math.min(...array)
    let max=Math.max(...array)
    
    
    array.splice(array.indexOf(Math.min(...array)), 1)

    // array.splice(array.indexOf(min), 1)

    array.splice(array.indexOf(max), 1)
    return array[0]
}


findNonMinOrMax( [3,2,1,4]) // 2, 3