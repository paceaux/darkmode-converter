const ColorParser = require('../lib/color-parser');

describe('public props on ColorParser', () => {
    test('colorSpaceTests', () => {
        const { colorSpaceTests } = ColorParser;

        expect(colorSpaceTests.get('rgb')).toBeTruthy();
        expect(colorSpaceTests.get('rgba')).toBeTruthy();
        expect(colorSpaceTests.get('hex')).toBeTruthy();
        expect(colorSpaceTests.get('hexa')).toBeTruthy();
        expect(colorSpaceTests.get('hsl')).toBeTruthy();
        expect(colorSpaceTests.get('hsla')).toBeTruthy();
    });

    describe('getColorSpace can determine the colorspace', () => {
        test('3-letter hex', () => {
            expect(ColorParser.getColorSpace('#ffa')).toEqual('hex');
        });
        test('6-letter hex', () => {
            expect(ColorParser.getColorSpace('#ffffaa')).toEqual('hex');
        });
        test('rgb', () => {
            expect(ColorParser.getColorSpace('rgb(100,200,100)')).toEqual('rgb');
        });
        test('rgba', () => {
            expect(ColorParser.getColorSpace('rgba(100,200,100, .5)')).toEqual('rgba');
        });
        test('hsl', () => {
            expect(ColorParser.getColorSpace('hsl(100,100%,100%)')).toEqual('hsl');
        });
        test('hsla', () => {
            expect(ColorParser.getColorSpace('hsla(100,100%,100%,.5)')).toEqual('hsla');
        });
    });
});
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

describe('parse hsl', () => {
    test('hsl', () => {
        const testColor = 'hsl(0,50%,100%)';
        const result = ColorParser.hsl(testColor);

        expect(result).toEqual(expect.arrayContaining(['0', '50%', '100%']));
    });
    test('hsla, comma separated', () => {
        const testColor = 'hsla(0,50%,100%,1)';
        const result = ColorParser.hsla(testColor);

        expect(result).toEqual(expect.arrayContaining(['0', '50%', '100%', '1']));
    });

    test('hsla, space separated', () => {
        const testColor = 'hsla(0 50% 100% / 1)';
        const result = ColorParser.hsla(testColor);

        expect(result).toEqual(expect.arrayContaining(['0', '50%', '100%', '1']));
    });
});
