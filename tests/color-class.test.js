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
});
