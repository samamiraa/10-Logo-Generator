//! base class shape with parameters shapeColor, textColor, text
class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

//! child class circle inherits parameters from base class shape
class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }

    //! render function that returns syntax for svg to create a circle & for text
    render(data) {
        return `<circle cx="150" cy="100" r="75" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
        <text x="150" y="120" text-anchor="middle" font-size="50px" fill="${this.textColor}">${this.text}</text>`
    }
}

//! child class triangle inherits parameters from base class shape
class Triangle extends Shape {
    constructor(shapeColor, textColor, text) { 
        super(shapeColor, textColor, text)
    }

    //! render function that returns syntax for svg to create a triangle & for text
    render(data) {
        return `<polygon points="150, 18 244, 182 56, 182" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
        <text x="150" y="150" text-anchor="middle" font-size="50px" fill="${this.textColor}">${this.text}</text>`
    }
}

//! child class square inherits parameters from base class shape
class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }

    //! render function that returns syntax for svg to create a square & for text
    render(data) {
        return `<rect x="84.5" y="70" width="125" height="125" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
        <text x="150" y="150" text-anchor="middle" font-size="50px" fill="${this.textColor}">${this.text}</text>`
    }
}

//! exports class circle, triangle and square
module.exports = {Circle, Triangle, Square};