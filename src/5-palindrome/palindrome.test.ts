import { isPalindrome } from "./palindrome";


describe("Exercício de palavra Palindromo", () => {
  test("String vazia", () => {
    const result = isPalindrome("");
    expect(result).toBe(true);
  });

  test("Somente 1 caracter", () => {
    const result = isPalindrome("a");
    expect(result).toBe(true);
  });

  test("Palavra Palindrome", () => {
    const result = isPalindrome("arara");
    expect(result).toBe(true);
  });

  test("Frase Palindrome", () => {
    const result = isPalindrome("Roma é amor");
    expect(result).toBe(true);
  });

  test("Palavra não Palindrome", () => {
    const result = isPalindrome("cachorro");
    expect(result).toBe(false);
  });
});
