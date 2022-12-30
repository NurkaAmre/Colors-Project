//Global selections and variables
class ColorPicker {
    constructor() {
        this.colorDivs =  document.querySelectorAll('.color');
        this.generateBtn = document.querySelector('.generate');
        this.sliders = document.querySelectorAll('input[type="range"]');
        this.currentHexes = document.querySelectorAll('.color h2');
        this.initialColors;
    }
    generateHex() {
    const hexColor = chroma.random();
    return hexColor;
    }
    randomColors() {
        this.colorDivs.forEach(div => {
        const hexText = div.children[0]
        const randomColor = this.generateHex()
        //ADD THE COLOR TO THE BG
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
        //check for contrast
        this.checkTextContrast(randomColor, hexText)
        //INITIAL COLORIZE SLIDERS
        const color = chroma(randomColor);
        const sliders = div.querySelectorAll('.sliders input');
        const hue = sliders[0];
        const brightness = sliders[1];
        const saturation = sliders[2];

        this.colorizeSliders(color, hue, brightness, saturation)
        })
    }
    checkTextContrast(color, text) {
        const luminance = chroma(color).luminance();
        if (luminance > 0.5) {
            text.style.color = 'grey';
        } else {
            text.style.color = 'white';
        }
    }
    colorizeSliders(color, hue, brightness, saturation) {
        //SCALE SATURATION
        const noSat = color.set('hsl.s', 0);
        const fullSat = color.set('hsl.s', 1);
        const scaleSat = chroma.scale([noSat, color, fullSat]);
        //SCALE BRIGHTNESS
        const midBright = color.set('hsl.l', 0.5)
        const scaleBright = chroma.scale(['black', midBright, 'white']);
        //UPDATE INPUT COLORS
        saturation.style.backgroundImage = `linear-gradient(to right,${scaleSat(0)}, ${scaleSat(1)})`;
        brightness.style.backgroundImage = `linear-gradient(to right,${scaleBright(0)}, ${scaleBright(0.5)}, ${scaleBright(1)})`;
        hue.style.backgroundImage = `linear-gradient(to right, rgb(255, 0, 0), rgb(255,255 ,0),rgb(0, 255, 0),rgb(0, 255, 255),rgb(0,0,255),rgb(255,0,255),rgb(255,0,0))`
    }
}

let randomHex = new ColorPicker();
console.log(randomHex.randomColors())
