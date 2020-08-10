const ColorConverter = require('./color-converter');
const ColorParser = require('./color-parser');

class Color {
    constructor(colorString) {
        this.colorString = colorString;
    }

    get colorSpace() {
        return ColorParser.getColorSpace(this.colorString);
    }

    get colorParts() {
        if (!this.colorSpace) return null;

        return ColorParser[this.colorSpace](this.colorString);
    }
}

module.exports = Color;
