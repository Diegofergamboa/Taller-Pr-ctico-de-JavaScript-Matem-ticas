// Principal setter
import { Square } from "./square.js";

const $setterCalculator = document.getElementsByClassName('setter-calculator');

function clicks(){
    console.log('di click');
}


const $buttonCuadrado = document.getElementsByClassName('button-cuadrado')[0];
$buttonCuadrado.addEventListener('click' , Square);
