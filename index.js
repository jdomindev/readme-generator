// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// array of objects with types
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is a description for your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What is needed for the installation of your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is needed for the usage of your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "Are there any credits for your project, if so who or what?",
    name: "credits",
  },
  {
    type: "list",
    message: "Choose a license to use for your project?",
    name: "license",
    choices: ["MIT", "Creative Commons", "BSD"],
  },
  {
    type: "input",
    message: "What are the features of your project?",
    name: "features",
  },
  {
    type: "input",
    message: "What can others do to contribute to your project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Write any tests for your project.",
    name: "tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README written...")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // pass answers into writeToFile function
      writeToFile("README1.md", generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
        console.log("another error");
      }
    });
}

// Function call to initialize app

init();
