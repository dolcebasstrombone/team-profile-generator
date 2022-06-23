//requires go here
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
        message: "Would you like to add another team member?",
        choices: ["Yes", "No"],
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
      return data.another;
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
        message: "Would you like to add another team member?",
        choices: ["Yes", "No"],
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      employeeArray.push(intern);
      return data.another;
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
        message: "Would you like to add another team member?",
        choices: ["Yes", "No"],
      },
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
      employeeArray.push(manager);
      return data.another;
    });
};

const promptAnother = function (choice) {
  if (choice === "Yes") {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "type",
          message: "What role would you like to add?",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((data) => {
        if (data.type === "Engineer") {
          return promptEngineer();
        }
        if (data.type === "Intern") {
          return promptIntern();
        }
      });
  }
  if (choice === "No") {
    return choice;
  }
};

promptManager()
  .then((choice) => {
    return promptAnother(choice);
  })
  .then((thing) => {
    console.log(thing);
  });

//.then use employeeArray to generate a manager card in page-template
//if user wants to add another employee, find the role and call the right prompt function

//get all the info via inquirer
//inquirer in classes? or in index? josh says in index
//fs.writeFile
