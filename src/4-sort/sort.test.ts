import { sort } from "./sort";

describe("Sort Exercise", () => {
  test("testSort_EmptyArray", () => {
    const result = sort([]);
    expect(result).toEqual([]);
  });

  test("testSort_SingleElementArray", () => {
    const result = sort(["apple"]);
    expect(result).toEqual(["apple"]);
  });

  test("testSort_SortedArray", () => {
    const input = ["apple", "banana", "cherry"];
    const result = sort(input);
    expect(result).toEqual(["apple", "banana", "cherry"]);
  });

  test("testSort_ReverseSortedArray", () => {
    const input = ["zebra", "lion", "bear"];
    const result = sort(input);
    expect(result).toEqual(["bear", "lion", "zebra"]);
  });

  test("testSort_UnsortedArray", () => {
    const input = ["banana", "apple", "cherry"];
    const result = sort(input);
    expect(result).toEqual(["apple", "banana", "cherry"]);
  });
});
