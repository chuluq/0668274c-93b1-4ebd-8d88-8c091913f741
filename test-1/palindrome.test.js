const palindromeCheck = require("./palindrome");

test("should return true when palindrome", () => {
  expect(palindromeCheck("kodok")).toBe(true);
  expect(palindromeCheck("eko")).toBe(false);
});
