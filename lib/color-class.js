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

    get hasAlpha() {
        if (!this.colorSpace) return null;

        return this.colorParts.length === 4;
    }

    get rgbParts() {
        const originSpace = this.colorSpace;

        switch (originSpace) {
        case 'hex':
            return ColorConverter.hexToRgb(this.colorString);
        case 'hexa':
            return ColorConverter.hexaToRgba(this.colorString);
        case 'hsl':
            return ColorConverter.hslToRgb(this.colorString);
        case 'hsla':
            return ColorConverter.hslaToRgba(this.colorString);
        default:
            return this.colorParts;
        }
    }

    get rgb() {
        const colorSpace = this.hasAlpha ? 'rgba' : 'rgb';
        return `${colorSpace}(${this.rgbParts.join()})`;
    }

    get hslParts() {
        const originSpace = this.colorSpace;

        switch (originSpace) {
        case 'hex':
            return ColorConverter.hexToHsl(this.colorString);
        case 'hexa':
            return ColorConverter.hexaToHsla(this.colorString);
        case 'rgb':
            return ColorConverter.rgbToHsl(this.colorString);
        case 'rgba':
            return ColorConverter.rgbaToHsla(this.colorString);
        default:
            return this.colorParts;
        }
    }

    get hsl() {
        const [h, s, l, a] = this.hslParts;
        const colorSpace = this.hasAlpha ? 'hsla' : 'hsl';

        return `${colorSpace}(${h},${s * 100}%,${l * 100}%${a ? `,${a}` : ''})`;
    }

    get hexParts() {
        const originSpace = this.colorSpace;

        switch (originSpace) {
        case 'rgb':
            return ColorConverter.rgbToHex(this.colorString);
        case 'rgba':
            return ColorConverter.rgbaToHexa(this.colorString);
        case 'hsl':
            return ColorConverter.hslToHex(this.colorString);
        case 'hsla':
            return ColorConverter.hslaToHexa(this.colorString);
        default:
            return this.colorString;
        }
    }

    get hex() {
        const [r, g, b, a] = this.hexParts;

        return `#${r.substr(2)}${g.substr(2)}${b.substr(2)}${a || ''}`;
    }
}

module.exports = Color;
