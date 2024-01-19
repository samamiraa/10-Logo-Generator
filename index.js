const inquirer = require('inquirer');
const validator = require('validator');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js')


const prompts = [{
        type: 'input',
        message: 'Enter 1 to 3 characters for your logo',
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
    let svgLogo;

    if (data.shape === "Triangle") {
        svgLogo = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgLogo.renderText()}
        ${svgLogo.renderTriangle()}
        </svg>
        `
    } else if (data.shape === "Circle") {
        svgLogo = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgLogo.renderText()}
        ${svgLogo.renderCircle()}
        </svg>
        `
    } else {
        svgLogo = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgLogo.renderText()}
        ${svgLogo.renderSquare()}
        </svg>
        `
    };
    
};

function init() {
    inquirer
        .prompt(prompts)
        .then(data => {
            createSVG(data);
        });
};

init();
