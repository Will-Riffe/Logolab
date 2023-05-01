function SVGenerate (data) {

    let width;
    let height;

    switch (data.shape) {


        case 'Circle':

            width = height = 300;
            const circle = new Circle(width / 2, height / 2, data.shapecolor, width / 2);
            
            return `
                <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                    ${circle.render()}
                    <text x="50%" y="50%" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
                </svg>`;

            break;




        case 'Ellipse':

            width = 150;
            height = 75;
            const ellipse = new Ellipse(75, 75, data.shapecolor, 20, 5);
           
                return `
                    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                        ${ellipse.render()}
                        <text x="50%" y="50%" text-anchor="middle" fill="${data.txtcolor}">${data.logotxt}</text>
                    </svg>`;

            break;



        case 'Square':

            width = 200;
            height = 200;
            const square = new Square(10, 10, data.shapecolor);
            
                return `
                    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                        ${square.render()}
                        <text x="50%" y="50%" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
                    </svg>`;

            break;



        case 'Triangle':

            width = height = 250;
            const triangle = new Triangle(56, 182, 150, 18, 244, 182, data.shapecolor);

            return `
                <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                    ${triangle.render()}
                    <text x="50%" y="50%" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
                </svg>`;

            break;



        default:
            console.log('Invalid shape selection.');
            return;
    }

}

module.exports = generateSVG;