var simplifiedFractions = (num) => {

    let index = 1
    const array = []

    const set = new Set()

    while (index <= num) {

        // let nestedIndex = index + 1

        // for (let nestedIndex = index + 1; nestedIndex <= num; nestedIndex++) {

        let nestedIndex = index
        // while (nestedIndex <= num) {

        // while (++nestedIndex <= num) {

        while (nestedIndex++ < num) {

            nestedIndex
            num

            let quotient = index / nestedIndex

            index
            nestedIndex

            if (set.has(quotient)) {
                continue
            }
            set.add(quotient)
            set.add(index + "/" + nestedIndex)

            // nestedIndex++

        }
        index++

    }

    set
    let strings=[...set].filter((e,i)=> i%2==1)
    return strings

    return [...set].filter((e,i)=>i %2==1)


}


console.log(simplifiedFractions(4),
    ["1/2", "1/3", "1/4", "2/3", "3/4"])

// export default simplifiedFractions



let result = ""
let inc = 0


do {
    inc++
    console.log(inc, "\n", result)
    console.log(inc)
    console.log("\n")
    console.log(result)

    result += `${inc}`
}

while (inc >=1 && inc <= 4)
    
// describe('calculator', () => {
//     it('adds numbers', () => {
//       expect(simplifiedFractions(4)).toBe(["1/2","1/3","1/4","2/3","3/4"])
//       simplifiedFractions(5) //?
//     })
// })

// it('multiplies numbers', () => {
//   const calculator = new Calculator();
//   expect(calculator.multiply(0, 2)).toBe(0);
//   expect(calculator.multiply(2, 0)).toBe(0);
//   expect(calculator.multiply(2, 2)).toBe(4);
// }