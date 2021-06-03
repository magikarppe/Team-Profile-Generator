const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testVal = "GitHubUser";
  const e = new Engineer("Vis", 1, "test@test.com", testVal);
  expect(e.github).toBe(testVal);
});

test("getRole() should return \"Engineer\"", () => {
  const testVal = "Engineer";
  const e = new Engineer("Vis", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testVal);
});

test("Can get GitHub username via getGithub()", () => {
  const testVal = "GitHubUser";
  const e = new Engineer("Vis", 1, "test@test.com", testVal);
  expect(e.getGithub()).toBe(testVal);
});
