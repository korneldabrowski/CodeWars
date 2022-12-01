// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


// this version does not use reverse function, so it performs much better!

function spinWords(string){
  
  let finalSentence = ""
  let sentence = string.split(' ');
  
  sentence.forEach((element) => {
    let word = element.split('');
    let temp ='';

    if(word.length <= 4){ finalSentence += element + " "}
    if(word.length >= 5) {
      for(let i = word.length - 1; i >= 0; i--){
        temp = temp + word[i];
      }
      temp += " "
      finalSentence = finalSentence + temp
    }
   })
  return finalSentence.trim()
}
