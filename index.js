const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Please enter description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter installation instructions.',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Please enter usage information.',
            name: 'usageInformation',
        },
        {
            type: 'input',
            message: 'Please enter instructions to run tests.',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Please choose a liscense from this list:',
            name: 'license',
            choices: ['MIT', 'ISC', 'Mozilla', 'Eclipse'],
        },
        {
            type: 'input',
            message: 'What is your GitHub username',
            name: 'username',
        },
    ])
}

const writeFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
        })
    };

questions()
    .then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return writeFile(data);
    })

