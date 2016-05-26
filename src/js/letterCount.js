//  Write a function that takes a string that finds out how many
//  times a character occurs.

var result = {};

function letterCount(word) {
  var lowerCaseWord = word.toLowerCase();
  for (var i = 0; i < lowerCaseWord.length; i++) {
    if (result.hasOwnProperty(word[i])) {
      result[lowerCaseWord[i]] += 1;
    } else {
      result[lowerCaseWord[i]] = 1;
    }
  }
  console.log(result);
}

letterCount('apple');
