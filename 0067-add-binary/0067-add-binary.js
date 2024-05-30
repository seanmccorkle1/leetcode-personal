var addBinary = (bitstring1, bitstring2) => {

    // treat "11" as 3 with "0b11"
    let binaryForm1 = "0b" + bitstring1
    let binaryForm2 = "0b" + bitstring2

    // parseInt("11", 2)

    // BigInt is basically just Number()
    // which always converts it to base 10 
    // in the absence of a "radix" parameter like parseInt(string, radix)

    
    // parseInt(binaryForm1, 2)

    let decimalNum1 = BigInt(`0b${bitstring1}`)
    let decimalNum2 = BigInt(binaryForm2)

    let sumAsDecimal = decimalNum1 + decimalNum2
    return sumAsDecimal.toString(2)
}


console.log(addBinary(bitstring1 = "11", bitstring2="1"))  // "100"

console.log("100", "3 + 1 = 4, 4 in binary is '100' ")