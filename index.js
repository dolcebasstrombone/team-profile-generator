//requires go here
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage= require("./utils/generate-page");

const employeeArray = [];

//prompt and create new engineer
const promptEngineer = function () {
  console.log("Please enter information about the team's manager.");
  return inquirer
    .prompt([
      //name
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the engineer's name.");
            return false;
          }
        },
      },
      //id
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the engineer's id.");
            return false;
          }
        },
      },
      //email
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the engineer's email.");
            return false;
          }
        },
      },
      //gitHub
      {
        type: "input",
        name: "gitHub",
        message: "What is the engineer's GitHub?",
        validate: (gitHubInput) => {
          if (gitHubInput) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub.");
            return false;
          }
        },
      },
      //another
      {
        type: "list",
        name: "another",
        message: "What team member would you like to add next?",
        choices: [
          "Engineer",
          "Intern",
          "I don't need to add any more team members.",
        ],
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.gitHub
      );
      employeeArray.push(engineer);
      promptAnother(data.another);
    });
};

//prompt and create new intern
const promptIntern = function () {
  console.log("Please enter information about the team's manager.");
  return inquirer
    .prompt([
      //name
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's name.");
            return false;
          }
        },
      },
      //id
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the intern's id.");
            return false;
          }
        },
      },
      //email
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the intern's email.");
            return false;
          }
        },
      },
      //school
      {
        type: "input",
        name: "school",
        message: "What is he intern's school?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the intern's school.");
            return false;
          }
        },
      },
      //another
      {
        type: "list",
        name: "another",
        message: "What team member would you like to add next?",
        choices: [
          "Engineer",
          "Intern",
          "I don't need to add any more team members.",
        ],
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      employeeArray.push(intern);
      promptAnother(data.another);
    });
};

//prompt and create new manager
const promptManager = function () {
  console.log("Please enter information about the team's manager.");
  return inquirer
    .prompt([
      //name
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name.");
            return false;
          }
        },
      },
      //id
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the manager's id.");
            return false;
          }
        },
      },
      //email
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the manager's email.");
            return false;
          }
        },
      },
      //office
      {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter the manager's office number.");
            return false;
          }
        },
      },
      //another
      {
        type: "list",
        name: "another",
        message: "What team member would you like to add next?",
        choices: [
          "Engineer",
          "Intern",
          "I don't need to add any more team members.",
        ],
      },
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
      employeeArray.push(manager);
      return data.another;
    });
};

const promptAnother = function (choice) {
  if (choice === "Engineer") {
    promptEngineer();
  }
  if (choice === "Intern") {
    promptIntern();
  }
  if (choice === "I don't need to add any more team members.") {
    generatePage(employeeArray);
  }
};

promptManager().then((choice) => {
  return promptAnother(choice);
});