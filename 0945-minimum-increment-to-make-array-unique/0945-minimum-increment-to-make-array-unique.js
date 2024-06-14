
var minIncrementForUnique = function (nums) {
    
    // Sort the array first
    nums.sort((a, b) => a - b)
    
    let numTracker = 0;   // Tracks the next unique number that should be set.
    let minIncrement = 0; // Counts the total increments required.
    
    for (let num of nums) {
        // 1, 4
        numTracker = Math.max(numTracker, num)
        minIncrement += numTracker - num;
        
        // Increment the tracker for the next number.
        ++numTracker 
    }

    // min to make it unique
    return minIncrement;
}

console.log(minIncrementForUnique([1,2,2])  ,  1, "just 1 on the last one")

// describe it 1)