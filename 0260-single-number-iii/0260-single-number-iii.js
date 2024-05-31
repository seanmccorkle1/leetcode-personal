var singleNumber = function(nums) {
    
    return nums.filter(num => nums.indexOf(num) == nums.lastIndexOf(num) )

    const numCount = new Map()
    const result = []
    
    // Count the occurrences of each number
    for (const num of nums) {
        if (numCount.has(num)) {
            numCount.set(num, numCount.get(num) + 1);
        }
        
        else {
            numCount.set(num, 1);
        }
    }

    // Find the numbers that appear only once
    for (const [key, value] of numCount.entries()) {
        if (value === 1) {
            result.push(key);
        }
    }

    return result;
};
