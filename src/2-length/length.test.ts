import { length } from "./length";

describe("Exercício de comprimento de string", () => {
  test("String Vazia", () => {
    const result = length("");
    expect(result).toBe(0);
  });

  test("String com 5 letras", () => {
    expect(length("teste")).toBe(5);
  });

  test("String com maiúsculas, minúsculas e acento", () => {
    const result = length("Bolão");
    expect(result).toBe(5);
  });

  test("String de espaços em branco", () => {
    const result = length("   ");
    expect(result).toBe(3);
  });

  test("String de Caracteres especiais", () => {
    const result = length("!@#$%");
    expect(result).toBe(5);
  });

  test("String com frase", () => {
    const result = length("Olá mundo");
    expect(result).toBe(9);
  });
});