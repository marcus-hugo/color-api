const color = document.getElementById('pick-color');
let pickedColor = '';

const scheme = document.getElementById('scheme-select');
let pickedScheme = '';

const form = document.getElementById('get-color-scheme');
const submitButton = document.getElementById('submit'); 

let schemeData = '';

color.addEventListener('input', function() {
    pickedColor = this.value
    pickedColor = pickedColor.replace('#', '').toUpperCase();
})

scheme.addEventListener('input', function() {
    pickedScheme = this.value;
    pickedScheme = pickedScheme.toLowerCase();
})

form.addEventListener('submit', function(event) {
    event.preventDefault()

    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}&format=json&mode=${pickedScheme}&count=4`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        schemeData = data;

        colorOne = document.querySelector('.color-one');
        colorTwo = document.querySelector('.color-two');
        colorThree = document.querySelector('.color-three');
        colorFour = document.querySelector('.color-four');
        colorFive = document.querySelector('.color-five');

        colorOne.style.background = `#${pickedColor}`;
        colorTwo.style.background = schemeData.colors[0].hex.value;
        colorThree.style.background = schemeData.colors[1].hex.value;
        colorFour.style.background = schemeData.colors[2].hex.value;
        colorFive.style.background = schemeData.colors[3].hex.value;

        valueOne = document.querySelector('.value-one');
        valueTwo = document.querySelector('.value-two');
        valueThree = document.querySelector('.value-three');
        valueFour = document.querySelector('.value-four');
        valueFive = document.querySelector('.value-five');

        valueOne.innerText = `#${pickedColor}`;
        valueTwo.innerText = schemeData.colors[0].hex.value;
        valueThree.innerText = schemeData.colors[1].hex.value;
        valueFour.innerText = schemeData.colors[2].hex.value;
        valueFive.innerText = schemeData.colors[3].hex.value;
    })
})

/* <input type="color" oninput="alert(this.value)"></input> */