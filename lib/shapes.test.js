const {Circle, Triangle, Square} = require('./shapes.js');

describe('Circle', () => {
    it('should take set shape color to blue, text color to white, text to SAM', () => {
        const syntax = `<circle cx="150" cy="100" r="75" stroke="blue" fill="blue" stroke-width="5"/>
        <text x="150" y="120" text-anchor="middle" font-size="50px" fill="white">SAM</text>`

        const circle = new Circle('blue', 'white', 'SAM');
        expect(circle.render()).toEqual(syntax);
    })
});

describe('Triangle', () => {
    it('should take set shape color to yellow, text color to black, text to MOM', () => {
        const syntax = `<polygon points="150, 18 244, 182 56, 182" stroke="yellow" fill="yellow" stroke-width="5"/>
        <text x="150" y="150" text-anchor="middle" font-size="50px" fill="black">MOM</text>`

        const triangle = new Triangle('yellow', 'black', 'MOM');
        expect(triangle.render()).toEqual(syntax);
    })
});

describe('Square', () => {
    it('should take set shape color to red, text color to green, text to DAD', () => {
        const syntax = `<rect x="84.5" y="70" width="125" height="125" stroke="red" fill="red" stroke-width="5"/>
        <text x="150" y="150" text-anchor="middle" font-size="50px" fill="green">DAD</text>`

        const square = new Square('red', 'green', 'DAD');
        expect(square.render()).toEqual(syntax);
    })
})

