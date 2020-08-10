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

    get rgbParts() {
        const originSpace = this.colorSpace;

        switch (originSpace) {
        case 'hex':
            return ColorConverter.hexToRgb(this.colorString);
        case 'hsl':
            return ColorConverter.hslToRgb(this.colorString);
        default:
            return this.colorParts;
        }
    }

    get rgb() {
        return `rgb(${this.rgbParts.join()})`;
    }

    get hslParts() {
        const originSpace = this.colorSpace;

        switch (originSpace) {
        case 'hex':
            return ColorConverter.hexToHsl(this.colorString);
        case 'rgb':
            return ColorConverter.rgbToHsl(this.colorString);
        default:
            return this.colorParts;
        }
    }

    get hsl() {
        const [h, s, l] = this.hslParts;

        return `hsl(${h},${s * 100}%,${l * 100}%)`;
    }

    get hexParts() {
        const originSpace = this.colorSpace;

        switch (originSpace) {
        case 'rgb':
            return ColorConverter.rgbToHex(this.colorString);
        case 'hsl':
            return ColorConverter.hslToHex(this.colorString);
        default:
            return this.colorString;
        }
    }

    get hex() {
        const [r, g, b] = this.hexParts;

        return `#${r.substr(2)}${g.substr(2)}${b.substr(2)}`;
    }
}

module.exports = Color;
