const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testVal = "UCF";
  const e = new Intern("Vis", 1, "test@test.com", testVal);
  expect(e.school).toBe(testVal);
});

test("getRole() should return \"Intern\"", () => {
  const testVal = "Intern";
  const e = new Intern("FVis", 1, "test@test.com", "UCF");
  expect(e.getRole()).toBe(testVal);
});

test("Can get school via getSchool()", () => {
  const testVal = "UCF";
  const e = new Intern("Vis", 1, "test@test.com", testVal);
  expect(e.getSchool()).toBe(testVal);
});
