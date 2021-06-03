const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Wanda";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testVal = 100;
  const e = new Employee("Vis", testVal);
  expect(e.id).toBe(testVal);
});

test("Can set email via constructor argument", () => {
  const testVal = "test@test.com";
  const e = new Employee("Vis", 1, testVal);
  expect(e.email).toBe(testVal);
});

test("Can get name via getName()", () => {
  const testVal = "Wanda";
  const e = new Employee(testVal);
  expect(e.getName()).toBe(testVal);
});

test("Can get id via getId()", () => {
  const testVal = 100;
  const e = new Employee("Vis", testVal);
  expect(e.getId()).toBe(testVal);
});

test("Can get email via getEmail()", () => {
  const testVal = "test@test.com";
  const e = new Employee("Vis", 1, testVal);
  expect(e.getEmail()).toBe(testVal);
});

test("getRole() should return \"Employee\"", () => {
  const testVal = "Employee";
  const e = new Employee("Wanda", 1, "test@test.com");
  expect(e.getRole()).toBe(testVal);
});
