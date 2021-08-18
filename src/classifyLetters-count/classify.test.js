import classifyLetters from "./solution";

describe("Example tests", () => {
  test("Example", () => {
    expect(classifyLetters("Bastion")).toEqual({
      consonants: 4,
      vowels: 3
    });
  });
  test("Another Example", () => {
    expect(classifyLetters("abcdefabcdef")).toEqual({
      consonants: 8,
      vowels: 4
    });
  });
});

describe("Solution tests", () => {
  test("1st test", () => {
    expect(classifyLetters("thequickbrownfoxjumpedoverthelazydog")).toEqual({
      consonants: 24,
      vowels: 12
    });
  });
  test("2nd test", () => {
    expect(classifyLetters("abracadabra")).toEqual({
      consonants: 6,
      vowels: 5
    });
  });
  test("3rd test", () => {
    expect(classifyLetters("Supercalifragilisticexpialidocious")).toEqual({
      consonants: 18,
      vowels: 16
    });
  });
  test("4th test", () => {
    expect(
      classifyLetters("Pneumonoultramicroscopicsilicovolcanoconiosis")
    ).toEqual({
      consonants: 25,
      vowels: 20
    });
  });
  test("5th test", () => {
    expect(classifyLetters("HahahaHahaHahaHaHahahahaHahaha")).toEqual({
      consonants: 15,
      vowels: 15
    });
  });
  test("6th test", () => {
    expect(classifyLetters("LettersAndWordsInASentence")).toEqual({
      consonants: 17,
      vowels: 9
    });
  });
  test("7th test", () => {
    expect(
      classifyLetters("SsssssSSSssssSssSSssSssSsSSSSSssssSsssSss")
    ).toEqual({
      consonants: 41,
      vowels: 0
    });
  });
  test("8th test", () => {
    expect(classifyLetters("aEiouAeiouaeIoiaeiOuaeioU")).toEqual({
      consonants: 0,
      vowels: 25
    });
  });
  test("9th test", () => {
    expect(classifyLetters("qwrtypsdfghjklzxcvbnm")).toEqual({
      consonants: 21,
      vowels: 0
    });
  });
  test("10th test", () => {
    expect(classifyLetters("PlmnWsxcBhytTrfCtrffC")).toEqual({
      consonants: 21,
      vowels: 0
    });
  });
});
