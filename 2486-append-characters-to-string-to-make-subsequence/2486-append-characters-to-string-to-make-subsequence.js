var appendCharacters = function(string, substring) {
    let index2 =0
    // let len = substring.length
    let num_of_letters_in_substring_that_match = index2

    for(let index=0;index<string.length;index++){

        let letter1=string[index]
        let letter2=substring[index2]

        if (letter1==letter2){
            num_of_letters_in_substring_that_match++
            index2++
        }

        if(substring.length===index2) {
            return 0
        }
    }


    return substring.length - num_of_letters_in_substring_that_match
}

appendCharacters(string = "coaching", substring = "coding")

