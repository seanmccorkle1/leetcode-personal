const mostCommonWord = (sentence, banned) => {
    const bannedSet = new Set(banned);
    const word_array = sentence.toLowerCase().split(/\W+/).filter(Boolean); // Use \W+ to split by non-word characters and filter to remove empty strings
    const map = {};

    let maxCount = 0;
    let winningWord = "";

    console.log(map);
    console.log(word_array);

    for (const current_word of word_array) {
        const notBanned = !bannedSet.has(current_word);

        if (notBanned) {
            map[current_word] = (map[current_word] || 0) + 1;

            if (map[current_word] > maxCount) {
                maxCount = map[current_word];
                winningWord = current_word;
            }
        }
    }

    console.log(map);
    return winningWord;
};

const sentence = "Bob hit ball, the hit BALL flew far after it was hit.";
const banned = ["hit"];
console.log(mostCommonWord(sentence, banned)); // It should return "ball"
