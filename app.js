//Global selections and variables
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll('.color h2');
let initialColors;

//Functions

//COLOR GENERATOR
const generateHex = () => {
    // const letters = '#0123456789ABCDEF';
    // let hash = '#';
    // for(let i=0; i<6; i++) {
    //     hash += letters[Math.floor(Math.random() * 16)]
    // }
    // return hash;
    const hexColor = chroma.random();
    return hexColor;
}
let randomHex = generateHex();
console.log(randomHex)

const randomColors = () => {
    colorDivs.forEach((div, index) => {
        console.log(div.children[0])
        const hexText = div.children[0];
        const randomColor = generateHex()
        //ADD THE COLOR TO THE BG
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
    })
}

randomColors();