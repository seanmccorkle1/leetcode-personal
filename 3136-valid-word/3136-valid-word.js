var isValid = function (word) {
    
    // needed since only "aeiou" is used
    word=word.toLowerCase()

    let vowels = "aeiou"
    
    let consonants = Array.from({
        length: 26
    }, (u, i) => String.fromCharCode(i + 97))
    
    // in order to pass the filter, it cant be a vowel
    consonants = consonants.filter(letter => !vowels.includes(letter))
    
    consonants = "[" + consonants.join("") + "]"    
    consonants = new RegExp(consonants)

    consonants
    word

    let vowelsMatch = /[aeiou]/
    
    let weirdChars = /[^a-zA-Z0-9]/

    // it must contain *only* alphanumerics 
    if (word.match(weirdChars)) {
        return false
    }

    const noVowel = word.match(vowelsMatch) == null
    const noConsonant = word.match(consonants) == null

    // word.match(consonants)
    const hasVowel = Boolean(word.match(vowelsMatch)) == true
    const hasConsonant = Boolean(word.match(consonants)) == true

    // it doesn't NEED a digit, but it can have them
    if (hasVowel && hasConsonant && word.length >= 3) {
        return true
    }
    return false
}

isValid("AhI") // true


// isValid("234Adas") // true

// isValid("ta#e") // false

// isValid("AhB") // true
// isValid("Ya$") // false

// isValid("#zwi") // false

// isValid("$APp") // false

// isValid("aa") // false
// isValid("3pp")
// isValid("a3$e$") // false