// BigInt is basically just Number()
// which always converts it to base 10 
// in the absence of a "radix" parameter like parseInt(string, radix)

var addBinary = (bitstring1, bitstring2) => {
    
    // "0b" is binary, not bigint
    let first_as_decimal =BigInt(`0b${bitstring1}`) 
    let second_as_decimal = BigInt("0b"+ bitstring2)
    
    let twenty=first_as_decimal+second_as_decimal
    
    let twenty_as_binary=    twenty.toString(2)
    return twenty_as_binary


}


console.log(addBinary(bitstring1 = "1011", bitstring2="1001"))  // "10100"

console.log("10100", '10100 = 20, which is the sum of 11+9 or the sum of  (1011 + 1001)')