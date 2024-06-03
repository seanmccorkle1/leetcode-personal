var appendCharacters = function(string, substring) {
    let j =0
    let len = substring.length

    for(let i=0;i<string.length;i++){

        let letter1=string[i]
        let letter2=substring[j]
        
        if (letter1==letter2){
            j++
        }
            
        // s[i]===t[j] && j++
        if(len===j) return 0
    }

    let num_of_letters_in_substring_that_match = j
    
    return len-num_of_letters_in_substring_that_match
}

appendCharacters(s = "coaching", t = "coding")
