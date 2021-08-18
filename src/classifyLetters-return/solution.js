function classifyLetters(word) {
  const allVowels = ["a", "e", "i", "o", "u"];

  const vowels = [];
  const consonants = [];

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (allVowels.includes(letter.toLowerCase())) {
      vowels.push(letter);
    } else {
      consonants.push(letter);
    }
  }

  return { vowels, consonants };
}

export default classifyLetters;
