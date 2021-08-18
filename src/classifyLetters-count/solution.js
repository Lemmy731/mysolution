function classifyLetters(word) {
  const allVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (allVowels.indexOf(letter) !== -1) {
      vowels += 1;
    } else {
      consonants += 1;
    }
  }

  return { vowels, consonants };
}

export default classifyLetters;
