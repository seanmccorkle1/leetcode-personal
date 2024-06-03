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

function toHex(d) {
    var r = d % 16;
    if (d - r == 0) {
        return toChar(r);
    }
    return toHex((d - r) / 16) + toChar(r);
}

function toChar(n) {
    const alpha = "0123456789ABCDEF";
    return alpha.charAt(n);
}


const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)]

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

function searchStringStuff(string) {

    string = string.trim().replaceAll("||", "").replaceAll("OR OR ", "OR")
    var string_without_quotes

    const there_is_a_bunch_of_quote_marks = s.matchAll('"').length >= 4
    const there_is_a_bunch_of_ORs = s.matchAll('OR').length >= 2

    if (there_is_a_bunch_of_quote_marks) {
        // string_without_quotes=
    }

    // if 

    s = '"' + s + '"'
    console.log(s.split("|").join('"|"'))


}


// string_without_quotes

var s = ""

s = `("Nicaraguan"|"Nicaragua"|"contras"|"Nicaraguas"|"Nicaragua's"|"contras" AROUND(20) "civil"|"communist"|"communism"|"communists"|"socialism"|"revolutionaries"|"revolutionary"|"socialists"|"Revolution"|"socialist"|"war"|"revolutions")`

let res = searchStringStuff(s)

var s2 = ""
s2 = '80s|eighties|1980|1980s|nineties|90s|nineties|1990s|20th'


console.log(res)


"nicaraguan" | "Nicaragua|Nicaraguas|Nicaragua's civil|communist|Revolution|socialist|war"


s.split("|")