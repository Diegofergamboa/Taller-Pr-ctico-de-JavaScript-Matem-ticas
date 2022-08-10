// Principal setter
import { Square } from "./square.js";


const $buttonCuadrado = document.getElementsByClassName('button-cuadrado')[0];
$buttonCuadrado.addEventListener('click' , calcularPerimetroCuadrado);

function calcularPerimetroCuadrado() {
    // Se captura el valor del input.
    const inputValue = document.getElementsByClassName('input-cuadrado')[0].value;

    // Se hacen los cálculos del área y el cuadrado.
    const areaCuadrado = (lado) => {(lado * lado ** 2)};
    const perimetroCuadrado = (lado) => {(lado * 4)}; // Esto se pone en centimetros cuadrados.
    console.log(areaCuadrado)
    console.log(perimetroCuadrado)
    // Se llaman los elementos a modificar y se lanzan los cálculos.

    //! Área.
    document.getElementsByClassName('div-calcular-area')[0].innerHTML = `
        <p>${areaCuadrado}</p>
    `;

    //! Perímetro.
    document.getElementsByClassName('div-calcular-perimetro')[0].innerHTML = `
        <p>${perimetroCuadrado} CM^2</p>
    `;
};

const x = 5 ;

Square('hola mundo desde el módulo al cuadrado');