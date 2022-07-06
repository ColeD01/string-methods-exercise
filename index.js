// double word function
function capsFunc(string) {
    let word = string
    let uppercaseWord = word.toUpperCase()
    let wordCombo = uppercaseWord.concat(word)
    return wordCombo
}
// console.log(capsFunc("hello"))

// word length function 

function squaringFunc(string2) {
    let mathWord = string2.length
    let mathWordValue = mathWord / 2 
    let result = Math.floor(mathWordValue)
  
    return result

    // return Math.floor(string2.length / 2)
}
// console.log(squaringFunc("hello"))

// slice function
function sliceFunc(words) {
let newWord = words.slice(0,squaringFunc(words))
// console.log("result" , squaringFunc(words))
// console.log(words.slice(0, 2))
return newWord
}
// console.log(sliceFunc("hello"))

// half-uppercased-function

function halfUpFunc(word) {    
    let input = word.slice(0,squaringFunc(word))
    let newInput = input.toUpperCase()
    // let result = newInput.concat(word)
    console.log(newInput.length)
    return newInput + word.slice(newInput.length)
}
console.log(halfUpFunc("hello world"))
