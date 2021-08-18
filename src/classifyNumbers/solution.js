function classifyNumbers(arrayOfNumbers) {
  const odd = [];
  const even = [];
  const units = [];
  const tens = [];
  const hundreds = [];
  const other = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const number = arrayOfNumbers[i];

    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }

    if (number >= 1 && number <= 9) {
      units.push(number);
    } else if (number >= 10 && number <= 99) {
      tens.push(number);
    } else if (number >= 100 && number <= 999) {
      hundreds.push(number);
    } else if (number === 0 || number >= 1000) {
      other.push(number);
    }
  }

  return { odd, even, tens, hundreds, units, other };
}

export default classifyNumbers;
