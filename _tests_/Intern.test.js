const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern(
    "Josie 'Intern' Franklin",
    "123",
    "email@example.com",
    "UNC Chapel Hill"
  );

  expect(intern.name).toBe("Josie 'Intern' Franklin");
  expect(intern.id).toBe("123");
  expect(intern.email).toBe("email@example.com");
  expect(intern.school).toBe("UNC Chapel Hill");
});

test("gets properties of intern using methods", () => {
  const intern = new Intern(
    "Josie 'Intern' Franklin",
    "123",
    "email@example.com",
    "UNC Chapel Hill"
  );

  expect(intern.getName()).toBe("Josie 'Intern' Franklin");
  expect(intern.getId()).toBe("123");
  expect(intern.getEmail()).toBe("email@example.com");
  expect(intern.getRole()).toBe("Intern");
  expect(intern.getSchool()).toBe("UNC Chapel Hill");
});