const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Josie 'Engineer' Franklin",
    "123",
    "email@example.com",
    "exampleHub"
  );

  expect(engineer.name).toBe("Josie 'Engineer' Franklin");
  expect(engineer.id).toBe("123");
  expect(engineer.email).toBe("email@example.com");
  expect(engineer.gitHub).toBe("exampleHub");
});

test("gets properties of engineer using methods", () => {
  const engineer = new Engineer(
    "Josie 'Engineer' Franklin",
    "123",
    "email@example.com",
    "exampleHub"
  );

  expect(engineer.getName()).toBe("Josie 'Engineer' Franklin");
  expect(engineer.getId()).toBe("123");
  expect(engineer.getEmail()).toBe("email@example.com");
  expect(engineer.getRole()).toBe("Engineer");
  expect(engineer.getGitHub()).toBe("exampleHub");
});
