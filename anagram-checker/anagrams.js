var out = document.getElementById("output");
var box1 = document.getElementById("word1textbox");
var box2 = document.getElementById("word2textbox");

function isAnagram(word1, word2) {
  // Returns a boolean.
  if (getLetterCount(word1).toString() == getLetterCount(word2).toString()) return true;
  return false;
}

function getLetterCount(word) {
  // Returns an array.
  word = word.toLowerCase();
  var wordlettercount = new Array(26).fill(0);
  for (var i = 0; i < word.length; i++){
    if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) wordlettercount[word.charCodeAt(i) - 97]++;
  }
  return wordlettercount;
}

function getAnagramResult(word1, word2) {
  // Returns void.
  word1 = word1.trim();
  word2 = word2.trim();
  if (word1 == "" || word2 == "") {
    out.textContent = "One (or both) of the textboxes are empty!";
    return;
  }
  if (isAnagram(word1, word2)) out.textContent = "Yep, \"" + word1 + "\" and \"" + word2 + "\" are anagrams!";
  else out.textContent = "Nope, \"" + word1 + "\" and \"" + word2 + "\" are not anagrams.";
}