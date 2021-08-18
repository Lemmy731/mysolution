function firstMultiplesOf(noOfMultiples, number, divisor) {
  const multiples = [];

  if (number % divisor === 0) {
    divisor = 1;
  }

  for (let i = 1; i <= noOfMultiples; i++) {
    const multiple = number * divisor * i;

    multiples.push(multiple);
  }

  return multiples;
}

export default firstMultiplesOf;
