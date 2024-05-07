class Shapes {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;

}

renderShape() {}

};



class Circle extends Shapes{
    constructor (color,text,textColor){
        super(color,text,textColor);
}
renderShape() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="90" 
    fill="${this.color}" />

    <text x="150" y="125" font-size="60" 
    text-anchor="middle" fill="${this.textColor}">
    ${this.text}</text>
    
    </svg>
    `
    }
};



class Square extends Shapes{
    constructor (color,text,textColor){
        super(color,text,textColor);
}

renderShape() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect x="10" y="10" width="200" height="300" 
    fill="${this.color}" 
    stroke-width="5"/>

    
    <text x="110" y="125" font-size="60" 
    text-anchor="middle" 
    fill="${this.textColor}">
    ${this.text}</text>

    </svg>
    `
    }
};

class Triangle extends Shapes{
    constructor (color,text,textColor){
        super(color,text,textColor);
    }

    renderShape() {
        return    `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <polygon points=" 20 200, 120 20, 220 200" 
        fill="${this.color}" 
        stroke-width="5"/>

        <text x="120" y="170" font-size="60" 
        text-anchor="middle" 
        fill="${this.textColor}">
        ${this.text}</text> 
        
        </svg>
        `
    }
};

module.exports = {Shapes, Circle, Square, Triangle};