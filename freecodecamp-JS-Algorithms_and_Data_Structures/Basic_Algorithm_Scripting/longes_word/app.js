




function findLongestWordLength(s) {
    return s.split(' ')
      .reduce(function(longest, word) {
        return Math.max(longest, word.length)
      }, 0);
  
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));



// In case you’re wondering about that 0 after the callback function,
// it is used to give an initial value to the longest, so that Math.max
//  will know where to start.
