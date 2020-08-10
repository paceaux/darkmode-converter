/* TODO: need methods for parsing HSL, HEX */
/* TODO: should this convert the values to numbers, or leave as strings? */

const colorSpaceTests = new Map([
    ['rgb', /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i],
    ['rgba', /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i],
    ['hex', /^#([\da-f]{3}){1,2}$/i],
    ['hexa', /^#([\da-f]{4}){1,2}$/i],
    ['hsl', /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i],
    ['hsla', /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i],
]);
class ColorParser {
    static rgb(rgb) {
        let result = null;
        const ex = ColorParser.colorSpaceTests.get('rgb');

        if (ex.test(rgb)) {
        // choose correct separator
            const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
            // turn "rgb(r,g,b)" into [r,g,b]
            const colorArray = rgb.substr(4).split(')')[0].split(sep);

            result = colorArray;
        }

        return result;
    }

    static rgba(rgba) {
        let result = null;
        const ex = ColorParser.colorSpaceTests.get('rgba');

        if (ex.test(rgba)) {
            const sep = rgba.indexOf(',') > -1 ? ',' : ' ';
            const colorArray = rgba.substr(5).split(')')[0].split(sep);

            // strip the slash if using space-separated syntax
            if (colorArray.indexOf('/') > -1) colorArray.splice(3, 1);

            result = colorArray;
        }

        return result;
    }

    static hex(hex) {
        let result = null;
        const ex = ColorParser.colorSpaceTests.get('hex');

        if (ex.test(hex)) {
            const colorArray = [];

            // 3 digits
            if (hex.length === 4) {
                colorArray[0] = `0x${hex[1]}${hex[1]}`;
                colorArray[1] = `0x${hex[2]}${hex[2]}`;
                colorArray[2] = `0x${hex[3]}${hex[3]}`;

                // 6 digits
            } else if (hex.length === 7) {
                colorArray[0] = `0x${hex[1]}${hex[2]}`;
                colorArray[1] = `0x${hex[3]}${hex[4]}`;
                colorArray[2] = `0x${hex[5]}${hex[6]}`;
            }
            result = colorArray;
        }
        return result;
    }

    static hexa(hex) {
        let result = null;
        const ex = ColorParser.colorSpaceTests.get('hexa');

        if (ex.test(hex)) {
            const colorArray = [];

            if (hex.length === 5) {
                colorArray[0] = `0x${hex[1]}${hex[1]}`;
                colorArray[1] = `0x${hex[2]}${hex[2]}`;
                colorArray[2] = `0x${hex[3]}${hex[3]}`;
                colorArray[3] = `0x${hex[4]}${hex[4]}`;
            } else if (hex.length === 9) {
                colorArray[0] = `0x${hex[1]}${hex[2]}`;
                colorArray[1] = `0x${hex[3]}${hex[4]}`;
                colorArray[2] = `0x${hex[5]}${hex[6]}`;
                colorArray[3] = `0x${hex[7]}${hex[8]}`;
            }
            result = colorArray;
        }
        return result;
    }

    static hsl(hsl) {
        let result = null;
        const ex = ColorParser.colorSpaceTests.get('hsl');

        if (ex.test(hsl)) {
            const sep = hsl.indexOf(',') > -1 ? ',' : ' ';
            const colorArray = hsl.substr(4).split(')')[0].split(sep);

            result = colorArray;
        }
        return result;
    }

    static hsla(hsl) {
        let result = null;
        const ex = ColorParser.colorSpaceTests.get('hsla');

        if (ex.test(hsl)) {
            const sep = hsl.indexOf(',') > -1 ? ',' : ' ';
            const colorArray = hsl.substr(5).split(')')[0].split(sep);

            // strip the slash if using space-separated syntax
            if (colorArray.indexOf('/') > -1) colorArray.splice(3, 1);
            result = colorArray;
        }
        return result;
    }
}

ColorParser.colorSpaceTests = colorSpaceTests;
module.exports = ColorParser;
