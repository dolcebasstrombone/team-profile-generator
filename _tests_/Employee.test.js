const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Josie", "123", "email@example.com");

  expect(employee.name).toBe("Josie");
  expect(employee.id).toBe("123");
  expect(employee.email).toBe("email@example.com");
});

test("gets properties of employee using methods", () => {
  const employee = new Employee("Josie", "123", "email@example.com");

  expect(employee.getName()).toBe("Josie");
  expect(employee.getId()).toBe("123");
  expect(employee.getEmail()).toBe("email@example.com");
  expect(employee.getRole()).toBe("Employee");
});
