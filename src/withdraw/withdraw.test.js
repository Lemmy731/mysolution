import atmWithdrawal from "./solution";

describe("Sample Tests", () => {
  test("Example", () => {
    expect(atmWithdrawal(1049)).toEqual([10, 2, 1, 0]);
  });

  test("Another Example", () => {
    expect(atmWithdrawal(130)).toEqual([1, 1, 1, 1]);
  });
});

describe("Solution Tests", () => {
  test("1st Test", () => {
    expect(atmWithdrawal(160)).toEqual([1, 3, 0, 0]);
  });
  test("2nd Test", () => {
    expect(atmWithdrawal(19)).toEqual([0, 0, 2, 1]);
  });
  test("3rd Test", () => {
    expect(atmWithdrawal(81)).toEqual([0, 4, 0, 1]);
  });
  test("4th Test", () => {
    expect(atmWithdrawal(0)).toEqual([0, 0, 0, 0]);
  });
  test("5th Test", () => {
    expect(atmWithdrawal(100)).toEqual([1, 0, 0, 0]);
  });
  test("6th Test", () => {
    expect(atmWithdrawal(9)).toEqual([0, 0, 1, 0]);
  });
  test("7th Test", () => {
    expect(atmWithdrawal(7)).toEqual([0, 0, 0, 7]);
  });
  test("8th Test", () => {
    expect(atmWithdrawal(80)).toEqual([0, 4, 0, 0]);
  });
  test("9th Test", () => {
    expect(atmWithdrawal(699)).toEqual([6, 4, 2, 1]);
  });
  test("10th Test", () => {
    expect(atmWithdrawal(9876)).toEqual([98, 3, 1, 7]);
  });
});
