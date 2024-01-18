const inquirer = require('inquirer');
const validator = require('validator');
const fs = require('fs');
const circle = require('./lib/shapes.js')
const triangle = require('./lib/shapes.js')
const square = require('./lib/shapes.js')

const prompts = [{
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
        }];

function createSVG(data) {
    const example = new Shape();
    if (!data.shapeColor) {
        console.log("Invalid shape color, please start again")
        return
    } else {
        example.setShapeColor(data.shapeColor);
    }
};

function init() {
    inquirer
        .prompt(prompts)
        .then(data => {
            createSVG(data);
        });
};

init();