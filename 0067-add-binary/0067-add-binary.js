var addBinary = (bitstring1, bitstring2) => {

    let twenty=BigInt(`0b${bitstring1}`)  + BigInt(`0b${bitstring2}`)
    return twenty.toString(2)

    // + BigInt(`0b${bitstring2})`)

    let v = BigInt(`0b${bitstring1}`)

    // treat "11" as 3 with "0b11"
    let binaryForm1 = "0b" + bitstring1
    let binaryForm2 = "0b" + bitstring2

    parseInt("11", 2)

    // BigInt is basically just Number()
    // which always converts it to base 10 
    // in the absence of a "radix" parameter like parseInt(string, radix)

    parseInt(binaryForm1, 2)

    let decimalNum1 = BigInt(binaryForm1)
    let decimalNum2 = BigInt(binaryForm2)

    let sumAsDecimal = decimalNum1 + decimalNum2
    return sumAsDecimal.toString(2)
}


console.log(addBinary(bitstring1 = "1011", bitstring2="1001"))  // "10100"

console.log("10100", '10100 = 20, which is the sum of 11+9 or the sum of  (1011 + 1001)')