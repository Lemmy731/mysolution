import firstMultiplesOf from "./solution";

describe("First x multiples of", () => {
  test("Example", () => {
    expect(firstMultiplesOf(10, 2, 5)).toEqual([
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100
    ]);
  });

  test("Another example", () => {
    expect(firstMultiplesOf(5, 3, 3)).toEqual([3, 6, 9, 12, 15]);
  });
});

describe("First x multiples of - Solution tests", () => {
  test("1st test", () => {
    expect(firstMultiplesOf(1, 2, 5)).toEqual([10]);
  });
  test("2nd test", () => {
    expect(firstMultiplesOf(4, 4, 1)).toEqual([4, 8, 12, 16]);
  });
  test("3rd test", () => {
    expect(firstMultiplesOf(22, 1, 7)).toEqual([
      7,
      14,
      21,
      28,
      35,
      42,
      49,
      56,
      63,
      70,
      77,
      84,
      91,
      98,
      105,
      112,
      119,
      126,
      133,
      140,
      147,
      154
    ]);
  });
  test("4th test", () => {
    expect(firstMultiplesOf(7, 59, 73)).toEqual([
      4307,
      8614,
      12921,
      17228,
      21535,
      25842,
      30149
    ]);
  });
  test("5th test", () => {
    expect(firstMultiplesOf(15, 92, 46)).toEqual([
      92,
      184,
      276,
      368,
      460,
      552,
      644,
      736,
      828,
      920,
      1012,
      1104,
      1196,
      1288,
      1380
    ]);
  });
  test("6th test", () => {
    expect(firstMultiplesOf(6, 1024, 1)).toEqual([
      1024,
      2048,
      3072,
      4096,
      5120,
      6144
    ]);
  });
  test("7th test - zero is a number", () => {
    expect(firstMultiplesOf(5, 0, 1)).toEqual([0, 0, 0, 0, 0]);
  });
  test("8th test", () => {
    expect(firstMultiplesOf(12, 11154, 13)).toEqual([
      11154,
      22308,
      33462,
      44616,
      55770,
      66924,
      78078,
      89232,
      100386,
      111540,
      122694,
      133848
    ]);
  });
  test("9th test", () => {
    expect(firstMultiplesOf(0, 262144, 64)).toEqual([]);
  });
  test("final test", () => {
    expect(firstMultiplesOf(3, 4.5, 1.5)).toEqual([4.5, 9, 13.5]);
  });
});
