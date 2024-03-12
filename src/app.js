/*
* File: app.js
* Author: Havel Janka
* Copyright: 2024, Havel Janka
* Group: Szoft I/1/N
* Date: 2024-03-12
* Github: https://github.com/Janka1220/
* Licenc: GNU GPL
*/

const aInput = document.querySelector("#ba")
const bInput = document.querySelector("#b")
const cInput = document.querySelector("#c")
const areaInput = document.querySelector("#area")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener ('click', () => {
    startCalc();

});

function startCalc() {
    const a = Number(aInput.value)
    const b = Number(bInput.value)
    const c = Number(cInput.value)
    const area = calcArea(a, b, c)
    console.log("Térfogat", area)
    areaInput.value = area

}
function calcArea(a, b, c) {
    return a + b + c /2;
}