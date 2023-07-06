function longestWord(str){
    let words = str.split(" ")
    let longWord = "";
    for(let word of words){
        if(word.length > longWord.length)
        longWord = word
    }

    return longWord
}
console.log(longestWord("iam going to pray at mosque"));