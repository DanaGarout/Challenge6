const numberInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-spc");
let volumeEl = document.getElementById("volume-spc");
let massEl = document.getElementById("mass-spc");
let meterToFeet  = 3.281;
let literToGallon = 0.264;
let kiloToPound = 2.204;

convertBtn.addEventListener("click", function(){
    let setValue = numberInput.value;

    lengthEl.textContent = `${setValue} meter = ${setValue * meterToFeet} feet`;
    volumeEl.textContent =   `${setValue} litres = ${setValue * literToGallon} gallons`;
    massEl.textContent =   `${setValue} kilos = ${setValue * kiloToPound} pounds`;

})
