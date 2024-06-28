// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'MPL 2.0', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter the contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the test instructions:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please list any questions!',
    }
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully wrote to README.md')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responces) => {
        const license = responces.license === 'None' ? "" : responces.license;
        const markdown = generateMarkdown({...responces, license});
        writeToFile('README.md', markdown)
    })
}

// Function call to initialize app
init();
