var commonChars = function (array) {

    array
    const letter_array = []

    array

    let first = array.shift()
    // word_array.unshift(first)
    // word_array

    array

    first.split("").forEach(l=>{

        let b= array.every(e=>e.indexOf(l) != -1) ? letter_array.push(l): false

        // if (b){
            array=array.map(string=>string.replace(l, ""))
            // array
        // }
        
        return 
    })
    return  letter_array
}