function palindromeSwapper(str) {

  let strsmall = str.toLowerCase()
  
  if (isPalindrome(strsmall)){
    return true
  }

  for (var i = 0; i < strsmall.length; i++) {
    let newStr = '';
    for (var j = 0; j < strsmall.length; j++) {
      if (i === j) {
        newStr += strsmall[j+1];
        newStr += strsmall[j];
        j++;
      } else {
        newStr += strsmall[j];
      }
    }
    if (isPalindrome(newStr)) return true;
  }
  return false;
}

function isPalindrome(str) {
  let str2 = str.toLowerCase()
  if (str2.split('').reverse().join('') === str2) return true;
  return false;
}

console.log(palindromeSwapper('Radar')); 
console.log(palindromeSwapper('Malam'));
console.log(palindromeSwapper('Kasur ini rusak'));
console.log(palindromeSwapper('Ibu Ratna antar ubi')); 
console.log(palindromeSwapper('Malas'));
console.log(palindromeSwapper('Makan nasi goreng'));
console.log(palindromeSwapper('Balonku ada lima')); 