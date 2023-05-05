const SVGenerate = require('./SVGenerate');

test('generates a square SVG element with default data', () => {
expect(SVGenerate()).toContain('<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect fill="white" /><text x="50%" y="55%" text-anchor="middle" fill="black" font-size="100"></text></svg>');
});

test('generates a circle SVG element with custom data', () => {
const data = { shape: 'Circle', shapecolor: 'red', textcolor: 'white', text: 'Circle' };
expect(SVGenerate(data)).toContain('<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="150" fill="red" /><text x="50%" y="55%" text-anchor="middle" fill="white" font-size="150">Circle</text></svg>');
});

test('generates a triangle SVG element with invalid data', () => {
const data = { shape: 'Invalid', shapecolor: 'blue', textcolor: 'white', text: 'Triangle' };
expect(SVGenerate(data)).toContain('Invalid shape selection: Invalid');
});