// Principal setter
import { Square } from "./square.js";


const $buttonCuadrado = document.getElementsByClassName('button-cuadrado')[0];
$buttonCuadrado.addEventListener('click' , calcularPerimetroCuadrado);

function calcularPerimetroCuadrado() {
    // Se captura el valor del input.
    const inputValue = document.getElementsByClassName('input-cuadrado')[0].value;

    // Se hacen los cálculos del área y el cuadrado.
    const areaCuadrado = (lado) => {lado ** 2};
    const perimetroCuadrado = (lado) => {lado * 4};
    
    // Se llaman los elementos a modificar y se lanzan los cálculos.

    //! Área.
    document.getElementsByClassName('div-calcular-area')[0].innerHTML = `
        <p>${areaCuadrado((inputValue))} CM^2</p>
    `;

    //! Perímetro.
    document.getElementsByClassName('div-calcular-perimetro')[0].innerHTML = `
        <p>${perimetroCuadrado((inputValue))}</p>
    `;
};

const x = 5 ;

Square('hola mundo desde el módulo al cuadrado');