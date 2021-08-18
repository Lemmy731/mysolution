function abbreviate(fullName) {
  const wordArr = fullName.split(" ");

  if (wordArr.length === 1) {
    return fullName;
  }

  let abbreviation = wordArr[0] + " ";

  for (let i = 1; i < wordArr.length; i++) {
    const word = wordArr[i];

    abbreviation += word[0] + ".";
  }

  return abbreviation;
}

// Do not modify anthing below this line

export default abbreviate;
