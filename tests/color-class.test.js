const Color = require('../lib/color-class');

describe('Color Class', () => {
    describe('Base Properties', () => {
        const red = new Color('#f00');

        test('default color string', () => {
            expect(red).toHaveProperty('colorString');
            expect(red.colorString).toEqual('#f00');
        });

        test('colorSpace', () => {
            expect(red).toHaveProperty('colorSpace');
            expect(red.colorSpace).toEqual('hex');
        });

        test('colorParts', () => {
            expect(red).toHaveProperty('colorParts');
            expect(red.colorParts).toEqual(['0xff', '0x00', '0x00']);
        });
    });
    describe('Starting with Hex', () => {
        const red = new Color('#f00');
        test('color in hex has rgb _parts_', () => {
            expect(red).toHaveProperty('rgbParts');
            expect(red.rgbParts).toEqual([255, 0, 0]);
        });
        test('color in hex has rgb _parts_', () => {
            expect(red).toHaveProperty('rgb');
            expect(red.rgb).toEqual('rgb(255,0,0)');
        });
        test('color in hex has hsl _parts_', () => {
            expect(red).toHaveProperty('hslParts');
            expect(red.hslParts).toEqual([0, 1, 0.5]);
        });
        test('color in hex has hsl', () => {
            expect(red).toHaveProperty('hsl');
            expect(red.hsl).toEqual('hsl(0,100%,50%)');
        });
    });
    describe('Starting with rgb', () => {
        const red = new Color('rgb(255,0,0)');
        test('color in rgb has hex _parts_', () => {
            expect(red).toHaveProperty('hexParts');
            expect(red.hexParts).toStrictEqual(['0xff', '0x00', '0x00']);
        });
        test('color in rgb has hex', () => {
            expect(red).toHaveProperty('hex');
            expect(red.hex).toEqual('#ff0000');
        });
        test('color in rgb has hsl _parts_', () => {
            expect(red).toHaveProperty('hslParts');
            expect(red.hslParts).toEqual([0, 1, 0.5]);
        });
        test('color in rgb has hsl', () => {
            expect(red).toHaveProperty('hsl');
            expect(red.hsl).toEqual('hsl(0,100%,50%)');
        });
    });
    describe('Starting with HSL', () => {
        const red = new Color('hsl(0,100%,50%)');
        test('color in hsl has hex _parts_', () => {
            expect(red).toHaveProperty('hexParts');
            expect(red.hexParts).toStrictEqual(['0xff', '0x00', '0x00']);
        });
        test('color in hsl has hex', () => {
            expect(red).toHaveProperty('hex');
            expect(red.hex).toEqual('#ff0000');
        });
        test('color in hsl has rgb _parts_', () => {
            expect(red).toHaveProperty('rgbParts');
            expect(red.rgbParts).toEqual([255, 0, 0]);
        });
        test('color in hsl has rgb', () => {
            expect(red).toHaveProperty('rgb');
            expect(red.rgb).toEqual('rgb(255,0,0)');
        });
    });
    describe('Knowing it has alpha', () => {
        test('hex alpha', () => {
            const red = new Color('#ff0000ff');

            expect(red).toHaveProperty('rgb');
            expect(red).toHaveProperty('hasAlpha');
            expect(red.hasAlpha).toEqual(true);
        });
        test('rgba alpha', () => {
            const red = new Color('rgba(255,0,0,.5)');

            expect(red).toHaveProperty('hsl');
            expect(red).toHaveProperty('hasAlpha');
            expect(red.hasAlpha).toEqual(true);
        });
        test('hsla alpha', () => {
            const red = new Color('hsla(0,100%,50%,.5)');

            expect(red).toHaveProperty('rgb');
            expect(red).toHaveProperty('hasAlpha');
            expect(red.hasAlpha).toEqual(true);
        });
        test('rgba translates to hsla', () => {
            const red = new Color('rgba(255,0,0,.5)');

            expect(red).toHaveProperty('hsl');
            expect(red.hsl).toEqual('hsla(0,100%,50%,0.5)');
        });
        test('hsla translates to rgba', () => {
            const red = new Color('hsla(0,100%,50%,0.5)');

            expect(red).toHaveProperty('rgb');
            expect(red.rgb).toEqual('rgba(255,0,0,0.5)');
        });
    });
});
