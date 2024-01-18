class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    renderText() {
        return `<text x="10" y="10" text-anchor="middle" font-size="50px" fill="${this.textColor}">${this.text}</text>`
    }
    
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }

    renderCircle() {
        return `<circle cx="25" cy="75" r="20" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`
    }
}

class Triangle extends Shape {
    constructor(shapeColor) { 
        super(shapeColor)
    }

    renderTriangle() {
        return `'<polygon points="150, 18 244, 182 56, 182" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>'`
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }

    renderSquare() {
        return `<rect x="10" y="10" width="30" height="30" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`
    }
}