const inquirer = require('inquirer');
const validator = require('validator');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');


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
        message: 'Enter a color keyword for your text color',
        name: 'textColor',
        validate: (input) => {
            if (!validator.isAlpha(input)) {
                return "Must be a color keyword";
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
        message: 'Enter a color keyword for your shape color',
        name: 'shapeColor',
        validate: (input) => {
            if (!validator.isAlpha(input)) {
                return "Must be a color keyword";
            } else {
                return true;
            };
        },
}];


function createSVG(data) {
   let svgLogo;
   const textUppercase = data.text.toUpperCase();
   const shapeUppercase = data.shapeColor.toUpperCase();
   const textColorUppercase = data.textColor.toUpperCase();

   if (data.shape === 'Triangle') {
        svgLogo = new Triangle(shapeUppercase, textColorUppercase, textUppercase);
   } else if (data.shape === 'Circle') {
        svgLogo = new Circle(shapeUppercase, textColorUppercase, textUppercase);
   } else {
        svgLogo = new Square(shapeUppercase, textColorUppercase, textUppercase);
   }
  
   const logoFrame =`
   <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
   ${svgLogo.render()}
   </svg>
   `;
    
   const exampleFolderPath = './Examples/logo.svg'
   
   fs.writeFile(exampleFolderPath, logoFrame, (err) => {
    if (err) {
        console.log('Unable to write SVG', err);
    } else {
        console.log('Generated logo.svg');
    };
   });
};

function init() {
    inquirer
        .prompt(prompts)
        .then(data => {
            createSVG(data);
        });
};

init();
