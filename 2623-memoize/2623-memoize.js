

var memoize = (sumFn) => {

    const memo = {}

    return (...args) =>{

        let argsAsString = args.join()
        const memoAlreadyHasArguments = (memo[argsAsString] !== undefined) ? true : false
        
        if (memoAlreadyHasArguments){
            let cachedReturnValue= memo[argsAsString]
            return  cachedReturnValue
            // return memo[argsAsString]
        }
        
        else if (!memoAlreadyHasArguments){

            let returnValue = sumFn(...args)
            memo[argsAsString] =returnValue

            return returnValue
        }
    }    
}

let callCount = 0

function sumTwo(num1, num2) {
    callCount+=1
    return num1+num2
} 

var memoizedFn = memoize(sumTwo)

memoizedFn.length // 0 (any amount of arguments)

memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1