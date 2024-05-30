var simplifiedFractions =function(num) {

    let decimalSet = new Set()
    let array = []

    num

    for (let slow_index = 1; slow_index < num; slow_index++) {

        num
        let fast_index = slow_index+1

        while (fast_index <= num) {

            if (fast_index > slow_index) {
        
                let div_string= slow_index+"/" + fast_index
                let div=eval(div_string)

                // if its unique
                
                const fraction_is_unique = !decimalSet.has(div)
                
                if (fraction_is_unique) {
                    decimalSet.add(div)
                    array.push(div_string)
                }
            }
            fast_index++
        }
    }

    return array
}

// export default simplifiedFractions

console.log(simplifiedFractions(4),     ["1/2","1/3","1/4","2/3","3/4"])

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