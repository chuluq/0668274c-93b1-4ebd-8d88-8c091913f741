function fishBash(total) {
  let word = "";

  for (var i = 0; i <= total; i++) {
    if (i % 15 == 0) {
      word = "Fish Bash";
    } else if (i % 3 == 0) {
      word = "Fish";
    } else if (i % 5 == 0) {
      word = "Bash";
    } else {
      word = i;
    }
  }

  console.log(word);

  return word;
}

module.exports = fishBash;
