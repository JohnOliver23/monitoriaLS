function helloString(name) {
    return `Hello ${name}.`
}

function equalStrings(string1, string2) {
  let test1 = string1.split(" ").join("").toUpperCase()
  let test2 = string2.split(" ").join("").toUpperCase()
  
  return test1 === test2 ? true : false
}

function countingWords(string) {
    return string.split(" ").length
}

function amazingHacker(string, oldWord, newWord) {
    while (string.includes(oldWord))
      string = string.replace(oldWord, newWord)
    return string
}

module.exports = {
    helloString,
    equalStrings,
    countingWords,
    amazingHacker
}
