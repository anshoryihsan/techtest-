function findFirstStringInBracket(str) {
  if (str.length > 0) {
    let indexFirstBracketFound = str.indexOf("(") + 1;
    let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
    let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
    str = str.substr(indexFirstBracketFound, indexClosingBracketFound);
    return str;
  } else {
    return "";
  }
}
console.log(findFirstStringInBracket("asdawdaw(sdisi)sdawdawda"));
