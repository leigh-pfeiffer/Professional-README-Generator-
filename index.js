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
        name: 'description',
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
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['APACHE 2.0','BSD 3', 'GPL 3.0', 'MIT', 'None']
      },
    {
        type: 'input',
        name: 'test',
        message: ' Provide tests written for your project and how to run them.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information (Required)',
        validate: inputUsage => {
            if (inputUsage) {
                return true;
            } else {
                console.log('Please enter information for usage');
                return false;
            }
        }
    },
    {
        Type: 'input', 
        name: 'contributing',
        message: 'List your contributors, if any.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;

        console.log('README has been generated!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("./sample-README.md", generateMarkdown(data));
    });
}
// Function call to initialize app
init();
