var subarraysDivByK = function(A, K) {
    
    let freq = new Array(K).fill(0)
    
    freq[0]=1 // 
    // This is the accumulative sum of the elements of A

    let sum = 0;


    // The count of wanted subarrays, whose Sum%K= zero
    let count=0;

    for(let i = 0; i < A.length; i++){

        sum=sum+A[i]

        var remainder= sum%K

        //ALWAYS CHOOSE THE POSITIVE REMAINDER
        if(remainder<0)remainder+=K // Explained below

        count+=freq[remainder]
        freq[remainder]++
    }
    return count
    

}

console.log(subarraysDivByK({array: [4,5,0,-2,-3,1], k: 5}),  7)