import { FACTORIALROW, FACTORIALCOLUMN } from "./functions";

describe("FACTORIALROW", () => {
  it("should return factorials as a horizontal array", () => {
    const result = FACTORIALROW(5);
    expect(result).toEqual([["1", "2", "6", "24", "120"]]);
  });

  it("should return an error message for invalid input", () => {
    const result = FACTORIALROW(-1);
    expect(result).toEqual([["Please enter a positive integer."]]);
  });

  it("should return an error message for non-integer input", () => {
    const result = FACTORIALROW(5.5);
    expect(result).toEqual([["Please enter a valid integer."]]);
  });
  it("should return an error message for input greater than 1000", () => {
    const result = FACTORIALROW(1001);
    expect(result).toEqual([["Please enter a number less than or equal to 1000."]]);
  });
});

describe("FACTORIALCOLUMN", () => {
  it("should return factorials as a vertical array", () => {
    const result = FACTORIALCOLUMN(5);
    expect(result).toEqual([["1"], ["2"], ["6"], ["24"], ["120"]]);
  });

  it("should return an error message for invalid input", () => {
    const result = FACTORIALCOLUMN(0);
    expect(result).toEqual([["Please enter a positive integer."]]); // Assuming validateParameter returns "Invalid input"
  });

  it("should return an error message for non-integer input", () => {
    const result = FACTORIALCOLUMN(5.5);
    expect(result).toEqual([["Please enter a valid integer."]]);
  });
  it("should return an error message for input greater than 1000", () => {
    const result = FACTORIALCOLUMN(1001);
    expect(result).toEqual([["Please enter a number less than or equal to 1000."]]);
  });
});
