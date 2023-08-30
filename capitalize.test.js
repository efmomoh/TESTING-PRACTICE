const capitalize = require("./capitalize");

describe("capitalize", () => {
  test("should capitalize the first character of the string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("should handle empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("should handle single character", () => {
    expect(capitalize("a")).toBe("A");
  });
});
