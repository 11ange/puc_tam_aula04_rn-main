import { sort } from "./sort";

describe("Exercício de ordenação de array", () => {
  test("array vazia", () => {
    const result = sort([]);
    expect(result).toEqual([]);
  });

  test("Array de 1 elemento", () => {
    const result = sort(["maçã"]);
    expect(result).toEqual(["maçã"]);
  });

  test("Array ordenada", () => {
    const input = ["banana", "maçã", "uva"];
    const result = sort(input);
    expect(result).toEqual(["banana", "maçã", "uva"]);
  });

  test("Array invertida", () => {
    const input = ["zebra", "urso", "leão"];
    const result = sort(input);
    expect(result).toEqual(["leão", "urso", "zebra"]);
  });

  test("Array aleatória", () => {
    const input = ["banana", "maçã", "abacaxi"];
    const result = sort(input);
    expect(result).toEqual(["abacaxi", "banana", "maçã"]);
  });

  test("Array aleatoria", () => {
    const input = ["banana", "maçã", "abacaxi", "pera"];
    const result = sort(input);
    expect(result).toEqual(["abacaxi", "banana", "maçã", "pera"]);
  });
});
