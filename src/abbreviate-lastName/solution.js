function abbreviate(fullName) {
  const wordArr = fullName.split(" ");

  if (wordArr.length === 1) {
    return fullName;
  }

  let abbreviation = "";

  for (let i = 0; i < wordArr.length - 1; i++) {
    const word = wordArr[i];

    abbreviation += word[0] + ".";
  }

  return abbreviation + " " + wordArr[wordArr.length - 1];
}

// Do not modify anthing below this line
export default abbreviate;
