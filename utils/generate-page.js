const pageTemplate = require("./../src/page-template");
const fs = require("fs");

const generatePage = function (employeeArray) {
  const generatedCards = [];

  const generateManager = function (manager) {
    generatedCards.push(`
      <div class="card bg-secondary bg-opacity-50" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2">${manager.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
      </ul>
    </div>
      `);
  };

  const generateEngineer = function (engineer) {
    generatedCards.push(`
    <div class="card bg-secondary bg-opacity-50" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <h6 class="card-subtitle mb-2">${engineer.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <a href="${engineer.email}">${engineer.email}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHub}" target="blank">${engineer.gitHub}</a></li>
    </ul>
  </div>
    `);
  };

  const generateIntern = function (intern) {
    generatedCards.push(`
    <div class="card bg-secondary bg-opacity-50" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <h6 class="card-subtitle mb-2">${intern.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>
    `);
  };

  employeeArray.forEach(function (employee) {
    if (employee.getRole() === "Manager") {
      generateManager(employee);
    }
  });

  employeeArray.forEach(function (employee) {
    if (employee.getRole() === "Engineer") {
      generateEngineer(employee);
    }
  });

  employeeArray.forEach(function (employee) {
    if (employee.getRole() === "Intern") {
      generateIntern(employee);
    }
  });

  //=======================================================================
  // employeeArray.forEach((employee) =>
  //   employee.getRole() === "Manager"
  //     ? generateManager(employee)
  //     : employee.getRole() === "Engineer"
  //     ? generateEngineer(employee)
  //     : generateIntern(employee)
  // );

  // couldn't figure out how to get this sorted by role in a more eficient way.
  //=======================================================================

  // write file
  new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", pageTemplate(generatedCards), (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });

  // copy file
  new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Stylesheet created!",
      });
    });
  });
};

module.exports = generatePage;
