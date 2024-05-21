const { Circle, Square, Triangle } = require('./shapes.js');

describe('Shapes', () => {
  test('Circle should return correct SVG', () => {
    const circle = new Circle('red', 'WTW', 'bisque');
    expect(circle.renderShape()).toContain('<circle');
    expect(circle.renderShape()).toContain('fill="red"');
    expect(circle.renderShape()).toContain('WTW');
  });

  test('Square should return correct SVG', () => {
    const square = new Square('orange', 'OHO', '#042');
    expect(square.renderShape()).toContain('<rect');
    expect(square.renderShape()).toContain('fill="orange"');
    expect(square.renderShape()).toContain('OHO');
  });

  test('Triangle should return correct SVG', () => {
    const triangle = new Triangle('black', 'VIV', 'blue');
    expect(triangle.renderShape()).toContain('<polygon');
    expect(triangle.renderShape()).toContain('fill="black"');
    expect(triangle.renderShape()).toContain('VIV');
  });
});