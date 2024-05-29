



var numSteps = function(s) {
    let i = 0, n = BigInt("0b"+s);
    
    while(n!=1n){
        n = n%2n==1n ? n+1n : n/2n;
        i++;
    }
    
    return i;
}
