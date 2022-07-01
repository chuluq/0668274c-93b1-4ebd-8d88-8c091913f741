const fishBash = require("./fish-bash");

test("properly display text", () => {
  expect(fishBash(3)).toEqual("Fish");
  expect(fishBash(5)).toEqual("Bash");
  expect(fishBash(15)).toEqual("Fish Bash");
});
