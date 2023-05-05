const { Circle, Square, Triangle } = require('./shape');
const { test, expect } = require('@jest/globals');


const { Circle, Square, Triangle } = require('./shape');

test('Circle renders correctly', () => {
const circle = new Circle(150, 100, 'red');
const circleString = circle.render();
expect(circleString).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square renders correctly', () => {
const square = new Square(10, 10, 'blue');
const squareString = square.render();
expect(squareString).toBe('<rect x="10" y="10" width="80" height="80" fill="blue" />');
});

test('Triangle renders correctly', () => {
const triangle = new Triangle(150, 18, 'green');
const triangleString = triangle.render();
expect(triangleString).toBe('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
});