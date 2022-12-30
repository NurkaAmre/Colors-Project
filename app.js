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
}

let randomHex = new ColorPicker();
console.log(randomHex.randomColors())
