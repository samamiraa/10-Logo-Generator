//! imports classes from shapes.js
const {Circle, Triangle, Square} = require('./shapes.js');

//! test for circle class that values are inputted in correct areas
describe('Circle', () => {
    //! describes what test should do
    it('should take set shape color to blue, text color to white, text to SAM', () => {
        //! what syntax should be after values are inputted
        const syntax = `<circle cx="150" cy="100" r="75" stroke="blue" fill="blue" stroke-width="5"/>
        <text x="150" y="120" text-anchor="middle" font-size="50px" fill="white">SAM</text>`

        //! variable for new circle with values to be inputted
        const circle = new Circle('blue', 'white', 'SAM');
        //! expect new circle using render function to input values in the correct areas in syntax
        expect(circle.render()).toEqual(syntax);
    })
});

//! test for triangle class that values are inputted in correct areas
describe('Triangle', () => {
    //! describes what test should do
    it('should take set shape color to yellow, text color to black, text to MOM', () => {
        //! what syntax should be after values are inputted
        const syntax = `<polygon points="150, 18 244, 182 56, 182" stroke="yellow" fill="yellow" stroke-width="5"/>
        <text x="150" y="150" text-anchor="middle" font-size="50px" fill="black">MOM</text>`

        //! variable for new circle with values to be inputted
        const triangle = new Triangle('yellow', 'black', 'MOM');
        //! expect new circle using render function to input values in the correct areas in syntax
        expect(triangle.render()).toEqual(syntax);
    })
});

//! test for square class that values are inputted in correct areas
describe('Square', () => {
    //! describes what test should do
    it('should take set shape color to red, text color to green, text to DAD', () => {
        //! what syntax should be after values are inputted
        const syntax = `<rect x="84.5" y="70" width="125" height="125" stroke="red" fill="red" stroke-width="5"/>
        <text x="150" y="150" text-anchor="middle" font-size="50px" fill="green">DAD</text>`

        //! variable for new circle with values to be inputted
        const square = new Square('red', 'green', 'DAD');
        //! expect new circle using render function to input values in the correct areas in syntax
        expect(square.render()).toEqual(syntax);
    })
})

