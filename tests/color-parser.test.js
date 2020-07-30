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
