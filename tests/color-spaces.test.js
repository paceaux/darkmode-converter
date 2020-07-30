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

    expect(ColorSpaces.rgbToHsl(testColor)).toBe('hsl(0,100%,50%)');
});

test('rgbaToHsla, ', () => {
    const testColor = 'rgba(255,0,0,1)';

    expect(ColorSpaces.rgbaToHsla(testColor)).toBe('hsla(0,100%,50%,1)');
});

test('hexToHsl, ', () => {
    const testColor = '#ff0000';

    expect(ColorSpaces.hexToHsl(testColor)).toBe('hsl(0,100%,50%)');
});

test('hexAToHslA, ', () => {
    const testColor = '#ff0000ff';

    expect(ColorSpaces.hexaToHsla(testColor)).toBe('hsla(0,100%,50%,1.000)');
});

test('rgbaToHsla, ', () => {
    const testColor = 'rgba(255,0,0,1)';

    expect(ColorSpaces.rgbaToHsla(testColor)).toBe('hsla(0,100%,50%,1)');
});
