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

    render() {}

}



/* 
    Information regarding the parameters listed below, feel free to
    review the following page regarding svg parameters:
    https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
*/

class circle extends shapes {
    render() {
        const circParams = `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
        return circParams;
    }
}



class ellipse extends shapes {
    render() {
        const elParams = `<<ellipse cx="75" cy="75" rx="20" ry="5" fill="${this.color}"/>`
        return elParams;
    }
}



class square extends shapes {
    render() {
        const squaParams = `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`
        return squaParams;
    }
}



class triangle extends shapes {
    render() {
        const triParams = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
        return triParams;
    }
}



module.exports = {circle, ellipse, square, triangle};