function isPalindrome(str) {
  let word = str + ""
  let backWords = ""
  for (let i = word.length; i > 0; i--) {
    backWords += word.substring(i-1,i)
  }
  if (backWords == word) {
    console.log(word + " is a palindrome: " + backWords)
  } else {
    console.log(word + " is not a palindrome: " + backWords)
  } 
}