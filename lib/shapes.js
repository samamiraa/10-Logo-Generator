class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }

    render(data) {
        return `<circle cx="150" cy="100" r="75" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
        <text x="153" y="120" text-anchor="middle" font-size="50px" fill="${this.textColor}">${this.text}</text>`
    }
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, text) { 
        super(shapeColor, textColor, text)
    }

    render(data) {
        return `<polygon points="150, 18 244, 182 56, 182" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
        <text x="155" y="150" text-anchor="middle" font-size="50px" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }

    render(data) {
        return `<rect x="85" y="70" width="125" height="125" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
        <text x="150" y="150" text-anchor="middle" font-size="50px" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = {Circle, Triangle, Square};