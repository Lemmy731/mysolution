import abbreviate from "./solution";

describe("Abbreviate(FirstName) Example tests", () => {
  test("Example", () => {
    expect(abbreviate("Junior")).toBe("Junior");
  });
  test("Another Example", () => {
    expect(abbreviate("Daniel Craig")).toBe("Daniel C.");
  });
  test("Yet Another Example", () => {
    expect(abbreviate("James Jonah Jameson")).toBe("James J.J.");
  });
});

describe("Abbreviate(FirstName) Solution tests", () => {
  test("1st Test", () => {
    expect(abbreviate("Mary Jane")).toBe("Mary J.");
  });
  test("2nd Test", () => {
    expect(abbreviate("Mary J Blige")).toBe("Mary J.B.");
  });
  test("3rd Test", () => {
    expect(abbreviate("W W W")).toBe("W W.W.");
  });
  test("4th Test", () => {
    expect(abbreviate("Decagon Institute")).toBe("Decagon I.");
  });
  test("5th Test", () => {
    expect(abbreviate("Rihanna")).toBe("Rihanna");
  });
  test("6th Test", () => {
    expect(abbreviate("A C")).toBe("A C.");
  });
  test("7th Test", () => {
    expect(abbreviate("A Samson")).toBe("A S.");
  });
  test("8th Test", () => {
    expect(abbreviate("Sia S")).toBe("Sia S.");
  });
  test("9th Test", () => {
    expect(abbreviate("J J")).toBe("J J.");
  });
  test("10th Test", () => {
    expect(abbreviate("It Is Always A Pleasure")).toBe("It I.A.A.P.");
  });
});
