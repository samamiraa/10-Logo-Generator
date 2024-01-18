const inquirer = require('inquirer');
const validator = require('validator');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js')


const prompts = [{
        type: 'input',
        message: 'Enter 1 to 3 letters for your logo',
        name: 'text',
        validate: (input) => {
            if (!validator.isLength(input, { min: 1, max: 3 })) {
                return "Text must be 1 to 3 characters";
            } else {
                return true;
            };
          },
        },
        {
        type: 'input',
        message: 'Enter a hexadecimal number for your text color EXCLUDING #',
        name: 'textColor',
        validate: (input) => {
            if (!validator.isAlphanumeric(input)) {
                return "Must be hexadecimal number EXCLUDING #";
            } else {
                return true;
            };
        },
        },
        {
        type: 'list',
        message: 'Choose a shape:',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square'],
        },
        {
        type: 'input',
        message: 'Enter a hexadecimal number for your shape color EXCLUDING #',
        name: 'shapeColor',
        validate: (input) => {
            if (!validator.isAlphanumeric(input)) {
                return "Must be hexadecimal number EXCLUDING #";
            } else {
                return true;
            };
        },
        }];

function createSVG(data) {
    
};

function init() {
    inquirer
        .prompt(prompts)
        .then(data => {
            createSVG(data);
        });
};

init();