/**@return {number
 */
var appendCharacters = function(s, t) {
    let j =0, len = t.length
    for(let i=0;i<s.length;i++){
        s[i]===t[j] && j++
        if(len===j) return 0
    }
    return len-j
};
