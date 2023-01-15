import { add } from "./index";

describe("add", () => {
  test("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
