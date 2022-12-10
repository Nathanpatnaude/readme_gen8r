// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
const Licensesobj = require('./utils/Licenseobj');
const Licenses = Licensesobj.getLicenseNames();
// TODO: Create an array of questions for user input
const questions = [{
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
    choices: Licenses
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
function writeToFile(fileName, data) {
    fs.writeFile('./' + fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created ' + fileName + '!')
    );

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const content = generateMarkdown(answers);
            writeToFile('README.md', content);

        });


}

// Function call to initialize app
init();
