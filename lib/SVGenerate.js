// Generates an SVG shape with text
// data: an object containing shape, shapecolor, textcolor, and text
function SVGenerate(data = { shape: 'Square', shapecolor: 'white', textcolor: 'black', text: 'fml' }) {

    let width;
    let height;

    // Determine the dimensions based on the selected shape
    switch (data.shape) {
        case 'Square':
            width = height = 200;
            break;

        case 'Circle':
            width = height = 300;
            break;

        case 'Triangle':
            width = height = 200;
            break;

        default:
            return `Invalid shape selection: ${data.shape}`;
    }

    // Construct the SVG element and return it
    return `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        ${
          data.shape === 'Square' ? `<rect` :
          data.shape === 'Circle' ? `<circle cx="${width / 2}" cy="${height / 2}" r="${width / 2}"` :
          data.shape === 'Triangle' ? `<polygon points="0,${height} ${width},${height} ${width / 2},0"` :
          ''
        }
        fill="${data.shapecolor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>
      </svg>
    `;
}

module.exports = SVGenerate;
