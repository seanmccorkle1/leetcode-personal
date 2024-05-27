var minimizedStringLength = function(string) {

    
    return [...string].sort().join("").match(/([^])(\1+)?/g).length
}


console.log( minimizedStringLength("dddaaa"), 2, "da")
console.log(minimizedStringLength("gz"), 2) 