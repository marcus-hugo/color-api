const html = document.querySelector('html');
const body = document.querySelector('body');
const app = document.querySelector('.app-container');
const color = document.getElementById('pick-color');
let pickedColor = '';

const scheme = document.getElementById('scheme-select');
let pickedScheme = '';

const form = document.getElementById('get-color-scheme');
const submitButton = document.getElementById('submit');

let schemeData = '';
let colorsArr = ['#F55A5A', '#2B283A', '#FBF3AB', '#AAD1B6', '#A626D3'];

colorOne = document.querySelector('.color-one');
colorTwo = document.querySelector('.color-two');
colorThree = document.querySelector('.color-three');
colorFour = document.querySelector('.color-four');
colorFive = document.querySelector('.color-five');

valueOne = document.querySelector('.value-one');
valueTwo = document.querySelector('.value-two');
valueThree = document.querySelector('.value-three');
valueFour = document.querySelector('.value-four');
valueFive = document.querySelector('.value-five');

let colorDivsArr = document.querySelectorAll('.color');
let modal = document.querySelector('.modal');

modal.style.display = 'none';

color.addEventListener('input', function () {
    pickedColor = this.value
    pickedColor = pickedColor.replace('#', '').toUpperCase();
})

scheme.addEventListener('input', function () {
    pickedScheme = this.value;
    pickedScheme = pickedScheme.toLowerCase();
})

// getting data from The Color API
form.addEventListener('submit', function (event) {
    event.preventDefault()

    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}&format=json&mode=${pickedScheme}&count=5`)
        .then(response => response.json())
        .then(data => {
            schemeData = data;

            let colorHexsArr = [
                schemeData.colors[0].hex.value,
                schemeData.colors[1].hex.value,
                schemeData.colors[2].hex.value,
                schemeData.colors[3].hex.value,
                schemeData.colors[4].hex.value
            ];

            app.style.borderImage = `linear-gradient(to right, 
            ${colorHexsArr[0]}, 
            ${colorHexsArr[1]}, 
            ${colorHexsArr[2]}, 
            ${colorHexsArr[3]}, 
            ${colorHexsArr[4]}) 1`;

            colorOne.style.background = schemeData.colors[0].hex.value;
            colorTwo.style.background = schemeData.colors[1].hex.value;
            colorThree.style.background = schemeData.colors[2].hex.value;
            colorFour.style.background = schemeData.colors[3].hex.value;
            colorFive.style.background = schemeData.colors[4].hex.value;

            valueOne.innerText = schemeData.colors[0].hex.value;
            valueTwo.innerText = schemeData.colors[1].hex.value;
            valueThree.innerText = schemeData.colors[2].hex.value;
            valueFour.innerText = schemeData.colors[3].hex.value;
            valueFive.innerText = schemeData.colors[4].hex.value;
        })
})

// Copy to clipboard using Clipboard API and show copied message
for (let i = 0; i < colorDivsArr.length; i++) {
    colorDivsArr[i].addEventListener('click', function (e) {

        if(schemeData === '') {
        } else { 
            let colorHex = schemeData.colors[i].hex.value;
            navigator.clipboard.writeText(colorHex);
            modal.style.display = 'inline-block';
            modal.style.left = `${e.pageX - 60}px`;
            modal.style.top = `${e.pageY - 40}px`;
            modal.innerText = `${colorHex} Copied!`;
            modal.style.padding = '.5rem';

            function remove() {
                modal.style.display = 'none';
            }

            setTimeout(remove, 1000);
        }
        
    })
}