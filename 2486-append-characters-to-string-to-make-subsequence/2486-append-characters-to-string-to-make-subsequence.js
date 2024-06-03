var appendCharacters = function(string, substring) {
    
    if (string.includes(substring))return 0
    
    let index2 =0
    let num_of_letters_in_substring_that_match = index2

    for(let index=0;index<string.length;index++){

        let letter1=string[index]
        let letter2=substring[index2]

        if (letter1==letter2){
            num_of_letters_in_substring_that_match++
            index2++
        }
        
    }
    let remaining_num_of_letters_needed = (substring.length - num_of_letters_in_substring_that_match)

    return remaining_num_of_letters_needed
}

appendCharacters(string = "coaching", substring = "coding")