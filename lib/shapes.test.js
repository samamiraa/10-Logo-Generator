const {Circle, Triangle, Square} = require('./shapes.js');

describe('Circle', () => {
    it('should take set shape color to blue, text color to white, text to SAM', () => {
        const syntax = `<circle cx="150" cy="100" r="75" stroke="blue" fill="blue" stroke-width="5"/>
        <text x="153" y="120" text-anchor="middle" font-size="50px" fill="white">SAM</text>`

        const circle = new Circle();
        expect(circle.render('blue', 'white', 'SAM')).toEqual(syntax);
    })
})