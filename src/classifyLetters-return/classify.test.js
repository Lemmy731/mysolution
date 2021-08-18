import classifyLetters from "./solution";

describe("Example tests", () => {
  test("Example", () => {
    expect(classifyLetters("Bastion")).toEqual({
      consonants: ["B", "s", "t", "n"],
      vowels: ["a", "i", "o"]
    });
  });
  test("Another Example", () => {
    expect(classifyLetters("abcdefabcdef")).toEqual({
      consonants: ["b", "c", "d", "f", "b", "c", "d", "f"],
      vowels: ["a", "e", "a", "e"]
    });
  });
});

describe("Solution tests", () => {
  test("1st test", () => {
    expect(classifyLetters("thequickbrownfoxjumpedoverthelazydog")).toEqual({
      consonants: [
        "t",
        "h",
        "q",
        "c",
        "k",
        "b",
        "r",
        "w",
        "n",
        "f",
        "x",
        "j",
        "m",
        "p",
        "d",
        "v",
        "r",
        "t",
        "h",
        "l",
        "z",
        "y",
        "d",
        "g"
      ],
      vowels: ["e", "u", "i", "o", "o", "u", "e", "o", "e", "e", "a", "o"]
    });
  });
  test("2nd test", () => {
    expect(classifyLetters("abracadabra")).toEqual({
      consonants: ["b", "r", "c", "d", "b", "r"],
      vowels: ["a", "a", "a", "a", "a"]
    });
  });
  test("3rd test", () => {
    expect(classifyLetters("Supercalifragilisticexpialidocious")).toEqual({
      consonants: [
        "S",
        "p",
        "r",
        "c",
        "l",
        "f",
        "r",
        "g",
        "l",
        "s",
        "t",
        "c",
        "x",
        "p",
        "l",
        "d",
        "c",
        "s"
      ],
      vowels: [
        "u",
        "e",
        "a",
        "i",
        "a",
        "i",
        "i",
        "i",
        "e",
        "i",
        "a",
        "i",
        "o",
        "i",
        "o",
        "u"
      ]
    });
  });
  test("4th test", () => {
    expect(
      classifyLetters("Pneumonoultramicroscopicsilicovolcanoconiosis")
    ).toEqual({
      consonants: [
        "P",
        "n",
        "m",
        "n",
        "l",
        "t",
        "r",
        "m",
        "c",
        "r",
        "s",
        "c",
        "p",
        "c",
        "s",
        "l",
        "c",
        "v",
        "l",
        "c",
        "n",
        "c",
        "n",
        "s",
        "s"
      ],
      vowels: [
        "e",
        "u",
        "o",
        "o",
        "u",
        "a",
        "i",
        "o",
        "o",
        "i",
        "i",
        "i",
        "o",
        "o",
        "a",
        "o",
        "o",
        "i",
        "o",
        "i"
      ]
    });
  });
  test("5th test", () => {
    expect(classifyLetters("HahahaHahaHahaHaHahahahaHahaha")).toEqual({
      consonants: [
        "H",
        "h",
        "h",
        "H",
        "h",
        "H",
        "h",
        "H",
        "H",
        "h",
        "h",
        "h",
        "H",
        "h",
        "h"
      ],
      vowels: [
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a"
      ]
    });
  });
  test("6th test", () => {
    expect(classifyLetters("LettersAndWordsInASentence")).toEqual({
      consonants: [
        "L",
        "t",
        "t",
        "r",
        "s",
        "n",
        "d",
        "W",
        "r",
        "d",
        "s",
        "n",
        "S",
        "n",
        "t",
        "n",
        "c"
      ],
      vowels: ["e", "e", "A", "o", "I", "A", "e", "e", "e"]
    });
  });
  test("7th test", () => {
    expect(
      classifyLetters("SsssssSSSssssSssSSssSssSsSSSSSssssSsssSss")
    ).toEqual({
      consonants: [
        "S",
        "s",
        "s",
        "s",
        "s",
        "s",
        "S",
        "S",
        "S",
        "s",
        "s",
        "s",
        "s",
        "S",
        "s",
        "s",
        "S",
        "S",
        "s",
        "s",
        "S",
        "s",
        "s",
        "S",
        "s",
        "S",
        "S",
        "S",
        "S",
        "S",
        "s",
        "s",
        "s",
        "s",
        "S",
        "s",
        "s",
        "s",
        "S",
        "s",
        "s"
      ],
      vowels: []
    });
  });
  test("8th test", () => {
    expect(classifyLetters("aEiouAeiouaeIoiaeiOuaeioU")).toEqual({
      consonants: [],
      vowels: [
        "a",
        "E",
        "i",
        "o",
        "u",
        "A",
        "e",
        "i",
        "o",
        "u",
        "a",
        "e",
        "I",
        "o",
        "i",
        "a",
        "e",
        "i",
        "O",
        "u",
        "a",
        "e",
        "i",
        "o",
        "U"
      ]
    });
  });
  test("9th test", () => {
    expect(classifyLetters("qwrtypsdfghjklzxcvbnm")).toEqual({
      consonants: [
        "q",
        "w",
        "r",
        "t",
        "y",
        "p",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m"
      ],
      vowels: []
    });
  });
  test("10th test", () => {
    expect(classifyLetters("PlmnWsxcBhytTrfCtrffC")).toEqual({
      consonants: [
        "P",
        "l",
        "m",
        "n",
        "W",
        "s",
        "x",
        "c",
        "B",
        "h",
        "y",
        "t",
        "T",
        "r",
        "f",
        "C",
        "t",
        "r",
        "f",
        "f",
        "C"
      ],
      vowels: []
    });
  });
});
