const ColorConverter = require('../lib/color-converter');

describe('convert To: RGB', () => {
    test('hexToRgb, 3 digits', () => {
        const testColor = '#f00';
        const result = ColorConverter.hexToRgb(testColor);

        expect(result[0]).toBe(255);
        expect(result[1]).toBe(0);
        expect(result[2]).toBe(0);
    });

    test('hexToRgb, 6 digits', () => {
        const testColor = '#ff0000';
        const result = ColorConverter.hexToRgb(testColor);

        expect(result[0]).toBe(255);
        expect(result[1]).toBe(0);
        expect(result[2]).toBe(0);
    });

    test('hexaToRgba', () => {
        const testColor = '#ff0000ff';
        const result = ColorConverter.hexaToRgba(testColor);

        expect(result[0]).toBe(255);
        expect(result[1]).toBe(0);
        expect(result[2]).toBe(0);
        expect(result[3]).toBe(1);
    });

    test('hslToRgb', () => {
        const testColor = 'hsl(0, 100%, 50%)';
        const result = ColorConverter.hslToRgb(testColor);

        expect(result[0]).toBe(255);
        expect(result[1]).toBe(0);
        expect(result[2]).toBe(0);
    });

    test('hslaToRgba', () => {
        const testColor = 'hsla(0, 100%, 50%, 1)';
        const result = ColorConverter.hslaToRgba(testColor);

        expect(result[0]).toBe(255);
        expect(result[1]).toBe(0);
        expect(result[2]).toBe(0);
        expect(result[3]).toBe(1);
    });
});

describe('convert to: hex', () => {
    test('rgbToHex, ', () => {
        const testColor = 'rgb(255,0,0)';

        expect(ColorConverter.rgbToHex(testColor)).toStrictEqual(['0xff', '0x00', '0x00']);
    });

    test('hslToHex: , ', () => {
        const testColor = 'hsl(0,100%,50%)';

        expect(ColorConverter.hslToHex(testColor)).toStrictEqual(['0xff', '0x00', '0x00']);
    });
});

describe('convert to: HSL', () => {
    test('rgbToHsl, ', () => {
        const testColor = 'rgb(255,0,0)';
        const result = ColorConverter.rgbToHsl(testColor);

        expect(result[0]).toBe(0);
        expect(result[1]).toBe(1);
        expect(result[2]).toBe(0.5);
    });

    test('rgbaToHsla, ', () => {
        const testColor = 'rgba(255,0,0,1)';
        const result = ColorConverter.rgbaToHsla(testColor);

        expect(result[0]).toBe(0);
        expect(result[1]).toBe(1);
        expect(result[2]).toBe(0.5);
        expect(result[3]).toBe(1);
    });

    test('hexToHsl, ', () => {
        const testColor = '#ff0000';
        const result = ColorConverter.hexToHsl(testColor);

        expect(result[0]).toBe(0);
        expect(result[1]).toBe(1);
        expect(result[2]).toBe(0.5);
    });

    test('hexAToHslA, ', () => {
        const testColor = '#ff0000ff';
        const result = ColorConverter.hexaToHsla(testColor);

        expect(result[0]).toBe(0);
        expect(result[1]).toBe(1);
        expect(result[2]).toBe(0.5);
        expect(result[3]).toBe(1);
    });
});
