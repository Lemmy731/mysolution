function withdraw(amount) {
  const noOf100s = Math.floor(amount / 100);

  amount = amount - noOf100s * 100;

  const noOf20s = Math.floor(amount / 20);

  amount = amount - noOf20s * 20;

  const noOf9s = Math.floor(amount / 9);

  amount = amount - noOf9s * 9;

  return [noOf100s, noOf20s, noOf9s, amount];
}

export default withdraw;
