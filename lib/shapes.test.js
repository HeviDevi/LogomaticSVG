const { Circle, Square, Triangle } = require('./shapes.js');

describe('Shapes', () => {
  test('Circle should return correct SVG', () => {
    const circle = new Circle('red', 'Hello', 'black');
    expect(circle.renderShape()).toContain('<circle');
    expect(circle.renderShape()).toContain('fill="red"');
    expect(circle.renderShape()).toContain('Hello');
  });

  test('Square should return correct SVG', () => {
    const square = new Square('blue', 'World', 'white');
    expect(square.renderShape()).toContain('<rect');
    expect(square.renderShape()).toContain('fill="blue"');
    expect(square.renderShape()).toContain('World');
  });

  test('Triangle should return correct SVG', () => {
    const triangle = new Triangle('green', 'Triangle', 'yellow');
    expect(triangle.renderShape()).toContain('<polygon');
    expect(triangle.renderShape()).toContain('fill="green"');
    expect(triangle.renderShape()).toContain('Triangle');
  });
});