const { asc, desc } = require("./sortNumber");

test("properly sorting number", () => {
  var array = [3, 7, 8, 5, 2, 0, 1];

  expect(asc(array)).toEqual([0, 1, 2, 3, 5, 7, 8]);
  expect(desc(array)).toEqual([8, 7, 5, 3, 2, 1, 0]);
});
