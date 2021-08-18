import abbreviate from "./solution";

describe("Abbreviate(LastName) Example tests", () => {
  test("Example", () => {
    expect(abbreviate("Junior")).toBe("Junior");
  });
  test("Another Example", () => {
    expect(abbreviate("Daniel Craig")).toBe("D. Craig");
  });
  test("Yet Another Example", () => {
    expect(abbreviate("James Jonah Jameson")).toBe("J.J. Jameson");
  });
});

describe("Abbreviate(FirstName) Solution tests", () => {
  test("1st Test", () => {
    expect(abbreviate("Mary Jane")).toBe("M. Jane");
  });
  test("2nd Test", () => {
    expect(abbreviate("Mary J Blige")).toBe("M.J. Blige");
  });
  test("3rd Test", () => {
    expect(abbreviate("W W W")).toBe("W.W. W");
  });
  test("4th Test", () => {
    expect(abbreviate("Decagon Institute")).toBe("D. Institute");
  });
  test("5th Test", () => {
    expect(abbreviate("Rihanna")).toBe("Rihanna");
  });
  test("6th Test", () => {
    expect(abbreviate("A C")).toBe("A. C");
  });
  test("7th Test", () => {
    expect(abbreviate("A Samson")).toBe("A. Samson");
  });
  test("8th Test", () => {
    expect(abbreviate("Sia S")).toBe("S. S");
  });
  test("9th Test", () => {
    expect(abbreviate("J J")).toBe("J. J");
  });
  test("10th Test", () => {
    expect(abbreviate("It Is Always A Pleasure")).toBe("I.I.A.A. Pleasure");
  });
});
