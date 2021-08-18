import classifyNumbers from "./solution";

describe("Example tests", () => {
  test("Example", () => {
    expect(classifyNumbers([1, 2, 30, 400, 5000])).toEqual({
      odd: [1],
      even: [2, 30, 400, 5000],
      units: [1, 2],
      tens: [30],
      hundreds: [400],
      other: [5000]
    });
  });

  test("Another Example", () => {
    expect(classifyNumbers([0, 21, 36, 4251, 5000])).toEqual({
      odd: [21, 4251],
      even: [0, 36, 5000],
      units: [],
      tens: [21, 36],
      hundreds: [],
      other: [0, 4251, 5000]
    });
  });
});

describe("Solution tests", () => {
  test("1st test", () => {
    expect(classifyNumbers([8, 88, 99, 100, 1000])).toEqual({
      even: [8, 88, 100, 1000],
      hundreds: [100],
      odd: [99],
      other: [1000],
      tens: [88, 99],
      units: [8]
    });
  });
  test("2nd test", () => {
    expect(classifyNumbers([])).toEqual({
      even: [],
      hundreds: [],
      odd: [],
      other: [],
      tens: [],
      units: []
    });
  });
  test("3rd test", () => {
    expect(
      classifyNumbers([
        90_000,
        100_000,
        100_000,
        1_000_000,
        10_000_000,
        100_000_000,
        1_000_000_000
      ])
    ).toEqual({
      even: [90000, 100000, 100000, 1000000, 10000000, 100000000, 1000000000],
      hundreds: [],
      odd: [],
      other: [90000, 100000, 100000, 1000000, 10000000, 100000000, 1000000000],
      tens: [],
      units: []
    });
  });
  test("4th test", () => {
    expect(classifyNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual({
      even: [2, 4, 6, 8],
      hundreds: [],
      odd: [1, 3, 5, 7, 9],
      other: [],
      tens: [],
      units: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
  });
  test("5th test", () => {
    expect(
      classifyNumbers([999_999, 55_55, 3_333_333, 1_111_111_111, 77_777_777])
    ).toEqual({
      even: [],
      hundreds: [],
      odd: [999999, 5555, 3333333, 1111111111, 77777777],
      other: [999999, 5555, 3333333, 1111111111, 77777777],
      tens: [],
      units: []
    });
  });
});
