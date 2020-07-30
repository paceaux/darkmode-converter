/* TODO: need methods for parsing HSL, HEX */
/* TODO: should this convert the values to numbers, or leave as strings? */
class ColorParser {
    static rgb(rgb) {
        let result = null;
        const ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
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
        const ex = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
        if (ex.test(rgba)) {
            const sep = rgba.indexOf(',') > -1 ? ',' : ' ';
            const colorArray = rgba.substr(5).split(')')[0].split(sep);

            // strip the slash if using space-separated syntax
            if (colorArray.indexOf('/') > -1) colorArray.splice(3, 1);

            result = colorArray;
        }

        return result;
    }
}

module.exports = ColorParser;
