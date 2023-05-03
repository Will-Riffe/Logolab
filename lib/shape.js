/*  
    Initializing groundwork for connecting the user input for the 
    program to turn into a logo. The first portion handles the 
    dimensions of the shape, followed by code for coloring the svg.
*/
class shapes {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.svgParam = null;
    }

    colorSet(color) {
        this.color = color;

        if (this.svgParam) {
            this.svgParam.setAttribute('fill', this.color);
        }
    }

    render()

}



/* 
    Information regarding the parameters listed below, feel free to
    review the following page regarding svg parameters:
    https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
*/

class Circle extends shapes {
    render() {
        const circleString = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
        return circleString;
    }
}

class Square extends shapes {
    render() {
      const squareString = `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`
      return squareString;
    }
  }
  
class Triangle extends Shapes {
    render() {
        const triangleString = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
        return triangleString;
    }
}

module.exports = {Triangle, Circle, Square};