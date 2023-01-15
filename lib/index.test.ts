import { describe, test, expect } from "vitest";
import { hello } from ".";

describe("hello", () => {
  test("Returns expected string", () => {
    expect(hello()).toBe("Hello, result=5!");
  });
});
