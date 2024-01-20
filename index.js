//! imports inquirer npm package
const inquirer = require('inquirer');
//! imports validator npm package
const validator = require('validator');
//! imports node file system
const fs = require('fs');
//! imports circle, triangle classes from shapes.js
const {Circle, Triangle, Square} = require('./lib/shapes.js');

//! inquirer prompt questions
const prompts = [{
        //! prompt for text
        type: 'input',
        message: 'Enter 1 to 3 characters for your logo',
        name: 'text',
        //! validate user input
        validate: (input) => {
            //! validator for length, must be min 1 and max 3 
            if (!validator.isLength(input, { min: 1, max: 3 })) {
                //! returns statement
                return "Text must be 1 to 3 characters";
            //! otherwise returns true
            } else {
                return true;
            };
          },
        },
        {
        //! prompt for text color
        type: 'input',
        message: 'Enter a color keyword for your text color',
        name: 'textColor',
        //! validate user input
        validate: (input) => {
            //! validator to ensure user input is letters only
            if (!validator.isAlpha(input)) {
                return "Must be a color keyword";
            } else {
                return true;
            };
        },
        },
        {
        //! prompt for shape
        type: 'list',
        message: 'Choose a shape:',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square'],
        },
        {
        //! prompt for shape color
        type: 'input',
        message: 'Enter a color keyword for your shape color',
        name: 'shapeColor',
        //! validate user input
        validate: (input) => {
            //! validator to ensure user input is letters only
            if (!validator.isAlpha(input)) {
                return "Must be a color keyword";
            } else {
                return true;
            };
        },
}];

//! function to create svg
function createSVG(data) {
    //! undefined variable 
   let svgLogo;
   //! changes user input to uppercase
   const textUppercase = data.text.toUpperCase();
   const shapeUppercase = data.shapeColor.toUpperCase();
   const textColorUppercase = data.textColor.toUpperCase();

   //! condition stmt if shape chosen is triangle
   if (data.shape === 'Triangle') {
        //! creates new triangle with user inputs as parameters
        svgLogo = new Triangle(shapeUppercase, textColorUppercase, textUppercase);
        //! condition stmt if shape chosen is circle
   } else if (data.shape === 'Circle') {
        //! creates new circle with user inputs as parameters
        svgLogo = new Circle(shapeUppercase, textColorUppercase, textUppercase);
        //! condition stmt if shape chosen is square
   } else {
        //! creates new square with user inputs as parameters
        svgLogo = new Square(shapeUppercase, textColorUppercase, textUppercase);
   }
  
   //! variable that has template literal with syntax with opening/closing svg tags with render function
   const logoFrame =`
   <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
   ${svgLogo.render()}
   </svg>
   `;
    
   //! path for svg to be created in examples folder
   const exampleFolderPath = './Examples/logo.svg'
   
   //! writes svg file 
   fs.writeFile(exampleFolderPath, logoFrame, (err) => {
    //! logs error
    if (err) {
        console.log('Unable to write SVG', err);
    //! logs sgv created
    } else {
        console.log('Generated logo.svg');
    };
   });
};

//! function to initialize app
function init() {
    //! starts inquirer prompts
    inquirer
        .prompt(prompts)
        //! then calls function to create svg
        .then(data => {
            createSVG(data);
        });
};

//! calls init function
init();
