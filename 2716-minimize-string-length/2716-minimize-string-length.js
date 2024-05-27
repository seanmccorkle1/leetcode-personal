

var minimizedStringLength = function(string) {
    
    return [...string].sort().join("").match(/([^])(\1+)?/g).length
}

"dddaaa", 2, "da"