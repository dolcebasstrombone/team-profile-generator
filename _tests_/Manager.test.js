const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager(
    "Josie 'Manager' Franklin",
    "123",
    "email@example.com",
    "321"
  );

  expect(manager.name).toBe("Josie 'Manager' Franklin");
  expect(manager.id).toBe("123");
  expect(manager.email).toBe("email@example.com");
  expect(manager.officeNumber).toBe("321");
});

test("gets properties of manager using methods", () => {
  const manager = new Manager(
    "Josie 'Manager' Franklin",
    "123",
    "email@example.com",
    "321"
  );

  expect(manager.getName()).toBe("Josie 'Manager' Franklin");
  expect(manager.getId()).toBe("123");
  expect(manager.getEmail()).toBe("email@example.com");
  expect(manager.getRole()).toBe("Manager");
});