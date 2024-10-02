import { max } from "./max";

describe("Max Exercise", () => {
  test("testLength_BothPositiveNumbers", () => {
    const result = max(5, 10);
    expect(result).toBe(10);
  });

  test("testLength_BothNegativeNumbers", () => {
    const result = max(-8, -3);
    expect(result).toBe(-3);
  });

  test("testLength_PositiveAndNegativeNumber", () => {
    const result = max(-2, 7);
    expect(result).toBe(7);
  });

  test("testLength_ZeroAndPositiveNumber", () => {
    const result = max(0, 12);
    expect(result).toBe(12);
  });

  test("testLength_ZeroAndNegativeNumber", () => {
    const result = max(-6, 0);
    expect(result).toBe(0);
  });
});