// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'Please enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the projects usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contributers to this project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter tests included:',
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license used for this project:",
    choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause Simplified License",
        "BSD 3-Clause New or Revised License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License 3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "Unlicense"
    ]
},
  {
    type: 'input',
    name: 'githubUser',
    message: 'Enter your Github username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your Email address:',
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
