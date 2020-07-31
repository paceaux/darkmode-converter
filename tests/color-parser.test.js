const ColorParser = require('../lib/color-parser');

describe('parse rgb', () => {
    test('plain rgb', () => {
        const testColor = 'rgb(255,0,0)';
        const result = ColorParser.rgb(testColor);

        expect(result).toEqual(expect.arrayContaining(['255', '0', '0']));
    });
    test('rgba', () => {
        const testColor = 'rgba(255,0,0,1)';
        const result = ColorParser.rgba(testColor);

        expect(result).toEqual(expect.arrayContaining(['255', '0', '0', '1']));
    });
});
describe('parse hex', () => {
    test('3 digits', () => {
        const testColor = '#f00';
        const result = ColorParser.hex(testColor);

        expect(result).toEqual(expect.arrayContaining(['0xff', '0x00', '0x00']));
    });
    test('3 digits, alpha', () => {
        const testColor = '#f00f';
        const result = ColorParser.hexa(testColor);

        expect(result).toEqual(expect.arrayContaining(['0xff', '0x00', '0x00', '0xff']));
    });
    test('6 digits', () => {
        const testColor = '#ff0000ff';
        const result = ColorParser.hexa(testColor);

        expect(result).toEqual(expect.arrayContaining(['0xff', '0x00', '0x00', '0xff']));
    });
});
