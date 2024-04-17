const colorElement = document.querySelector(".color-element");
const copyBtn = document.querySelector(".copyBtn");
const rgbElement = document.querySelector(".rgb-element");
const hexElement = document.querySelector(".hex-element") 
let state = false;

function generator() {
    let random1 = Math.floor(Math.random() * 300);
    let random2 = Math.floor(Math.random() * 200);
    let random3 = Math.floor(Math.random() * 100);
    color = `rgb(${random1},${random2},${random3})`;
    colorElement.style.backgroundColor = color;
    rgbElement.textContent = `RGB : ${color}`;

    let r = random1;
    let g = random2;
    let b = random3;
    let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
     finalHex = hex.toUpperCase();
    hexElement.textContent = `Hex : ${finalHex}`;


    state = true;
}

copyBtn.addEventListener("click", function () {
    if (state === true) {
        navigator.clipboard.writeText(color +'\n'+  finalHex);
    } else {
        alert("Generate the color to copy");
    }
});
