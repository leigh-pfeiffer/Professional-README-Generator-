// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {  
    type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required):',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'discription',
        message: 'Provide a discription of your project. (Required)',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please provide a discription!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address. (Required)',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please provide your email address!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the stepts to install ypur project?'
    },
    {
        type: 'checkbox',
        name: 'licence',
        message: 'Choose the licences for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache', 'Mozilla Public', 'GNU AGPLv3','None']
    },
    {
        type: 'input',
        name: 'tests',
        message: ' Provide tests written for your project and how to run them.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeToFile(fileName, data, err => {
        if (err) throw err;
        console.log('README complete!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            return generateReadMe(data);
        })
        .then(data => {
            return writeToFile('README.md', data)
        })
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();