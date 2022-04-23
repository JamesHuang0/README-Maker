// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project's title?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project.'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Give instructions on how to install your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select which license the application is covered under.',
            choices: ['MIT', 'Mozilla Public License', 'Apache', 'GNU GPLv3', 'None']
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])}; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

