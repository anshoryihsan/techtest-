function sortStrChars(str) {
  if (!str) {
    return;
  }
  str = str.split("");
  str = str.sort();
  str = str.join("");
  return str;
}

function getGroupedAnagrams(wordss) {
  const anagrams = {}; // {abc:[abc,cba], aku:[aku]}

  wordss.forEach((word) => {
    const sortedWord = sortStrChars(word);
    if (anagrams[sortedWord] != null) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  });
  return anagrams;
}
function anagram(arr) {
  const groupedAnagrams = getGroupedAnagrams(arr);
  let anagram = [];
  for (const sortedWord in groupedAnagrams) {
    anagram.push(groupedAnagrams[sortedWord]);
  }
  return anagram;
}
console.log(anagram(["kita", "atik", "tika", "aku", "kia", "makan", "mkana"]));
