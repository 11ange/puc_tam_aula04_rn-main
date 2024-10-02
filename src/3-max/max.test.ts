import { max } from "./max";

describe("Exercício de valor máximo", () => {
  test("Dois números positivos", () => {
    const result = max(5, 10);
    expect(result).toBe(10);
  });

  test("Dois números negativos", () => {
    const result = max(-8, -3);
    expect(result).toBe(-3);
  });

  test("Um positivo e outro negativo", () => {
    const result = max(-2, 7);
    expect(result).toBe(7);
  });

  test("Zero e um positivo", () => {
    const result = max(0, 12);
    expect(result).toBe(12);
  });

  test("Zero e um negativo", () => {
    const result = max(0, -6);
    expect(result).toBe(0);
  });

  test("Dois Zeros", () => {
    const result = max(0, 0);
    expect(result).toBe(0);
  });
});