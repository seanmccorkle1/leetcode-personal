/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let wordArr = sentence.split(" ");
    wordArr = wordArr.map(w => {
        for(let i = 0; i <= dictionary.length - 1; i++) {
            if (w.indexOf(dictionary[i]) === 0) {
                w = dictionary[i];
            }
        }
        return w;
    })
    return wordArr.reduce((str, word) => str += `${word} `, "").trim();
};
