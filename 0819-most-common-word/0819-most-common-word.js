var mostCommonWord =function (sentence, banned) {
 
    const bannedSet = new Set(banned)
    const word_array = sentence.toLowerCase().split(/\W+/).filter(e=>Boolean(e)==true)
    
    // Use \W+ to split by non-word characters and filter to remove empty strings

    const map = {}

    let maxCount = 0
    let winningWord = ""

    console.log(map)
    console.log(word_array)

    for (const currWord of word_array) {

        const notBanned = !(bannedSet.has(currWord))
        
        if (notBanned) {
            
            map[currWord] = (map[currWord] || 0) + 1

            if (map[currWord] > maxCount) {
                maxCount = map[currWord]
                winningWord = currWord
            }
        }
    }

    console.log(map)
    return winningWord
}

const sentence = "Bob hit ball, the hit BALL flew far after it was hit."
const banned = ["hit"]

console.log(mostCommonWord(sentence, banned))
// It should return "ball"
