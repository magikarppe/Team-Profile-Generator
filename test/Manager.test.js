const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testVal = 100;
  const e = new Manager("Vis", 1, "test@test.com", testVal);
  expect(e.officeNumber).toBe(testVal);
});

test('getRole() should return "Manager"', () => {
  const testVal = "Manager";
  const e = new Manager("Vis", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testVal);
});

test("Can get office number via getOffice()", () => {
  const testVal = 100;
  const e = new Manager("Vis", 1, "test@test.com", testVal);
  expect(e.getOfficeNumber()).toBe(testVal);
});
