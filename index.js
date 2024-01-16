const inquirer = require('inquirer');

inquirer
    .prompt([
        {
        type: 'input',
        message: 'Enter 3 letters for your logo',
        name: 'text',
        },
        {
        type: 'input',
        message: 'Enter a color keyword for your text color',
        name: 'textColor',
        },
        {
        type: 'list',
        message: 'Choose a shape:',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square'],
        },
        {
        type: 'input',
        message: 'Enter a color keyword for your shape color',
        name: 'shapeColor',
        },
    ]);



