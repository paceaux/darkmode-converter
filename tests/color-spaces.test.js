const ColorSpaces = require('../lib/color-spaces');

test('hexToRgb, 3 digits', () => {
    const testColor = '#f00';
    const result = ColorSpaces.hexToRgb(testColor);

    expect(result[0]).toBe(255);
    expect(result[1]).toBe(0);
    expect(result[2]).toBe(0);
});

test('hexToRgb, 6 digits', () => {
    const testColor = '#ff0000';
    const result = ColorSpaces.hexToRgb(testColor);

    expect(result[0]).toBe(255);
    expect(result[1]).toBe(0);
    expect(result[2]).toBe(0);
});

test('rgbToHex, ', () => {
    const testColor = 'rgb(255,0,0)';

    expect(ColorSpaces.rgbToHex(testColor)).toBe('#ff0000');
});

test('rgbToHsl, ', () => {
    const testColor = 'rgb(255,0,0)';
    const result = ColorSpaces.rgbToHsl(testColor);

    expect(result[0]).toBe(0);
    expect(result[1]).toBe(1);
    expect(result[2]).toBe(0.5);
});

test('rgbaToHsla, ', () => {
    const testColor = 'rgba(255,0,0,1)';
    const result = ColorSpaces.rgbaToHsla(testColor);

    expect(result[0]).toBe(0);
    expect(result[1]).toBe(1);
    expect(result[2]).toBe(0.5);
    expect(result[3]).toBe(1);
});

test('hexToHsl, ', () => {
    const testColor = '#ff0000';
    const result = ColorSpaces.hexToHsl(testColor);

    expect(result[0]).toBe(0);
    expect(result[1]).toBe(1);
    expect(result[2]).toBe(0.5);
});

test('hexAToHslA, ', () => {
    const testColor = '#ff0000ff';
    const result = ColorSpaces.hexaToHsla(testColor);

    expect(result[0]).toBe(0);
    expect(result[1]).toBe(1);
    expect(result[2]).toBe(0.5);
    expect(result[3]).toBe(1);
});
