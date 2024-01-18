class Shape {
    constructor() {
    }

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    renderText() {
        return `<text x="10" y="10" text-anchor="middle" font-size="50px">${data.text}</text>`
    }
    
}

class Circle extends Shape {
    constructor() {
    }

}

class Triangle extends Shape {
    constructor() { 
    }
}

class Square extends Shape {
    constructor() {
    }
}