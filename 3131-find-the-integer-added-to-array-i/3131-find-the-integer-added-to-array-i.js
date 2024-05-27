
var addedInteger = function(nums1, nums2) {
    
    let firstSum =nums1.reduce((a,b) => a+b)

    nums1.reduce((a,b) => a*b)
    nums1.reduce((a,b) => a*b,1)

    let secondSum = nums2.reduce((a,b) => a+b,0)

    console.log(nums1)


    // 9/0
    let final =  (secondSum-firstSum)
    
    // if (final==0){
    //     return 0
    // }
    return final/nums1.length
}


console.log(addedInteger( nums1 = [2,6,4], nums2 = [9,7,5]), 3)