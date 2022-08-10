// Principal setter
import { Square } from "./square.js";


const $buttonCuadrado = document.getElementsByClassName('button-cuadrado')[0];
$buttonCuadrado.addEventListener('click' , calcularPerimetroCuadrado);

function calcularPerimetroCuadrado() {
    // Se captura el valor del input.
    const inputValue = document.getElementsByClassName('input-cuadrado')[0].value;
    console.log(inputValue)
    // Se hacen los cálculos del área y el cuadrado.
    
    const areaCuadrado = (lado) => { return lado ** 2};
    const perimetroCuadrado = (lado) => { return lado * 4};
    
    // Se llaman los elementos a modificar y se lanzan los cálculos.
    const resultArea = areaCuadrado(inputValue);
    const resultPerimetro = perimetroCuadrado(inputValue);

    //! Área.
    document.getElementsByClassName('div-calcular-area')[0].innerHTML = `
        <p>El valor del área es ${resultArea} CM^2</p>
    `;

    //! Perímetro.
    document.getElementsByClassName('div-calcular-perimetro')[0].innerHTML = `
        <p>El valor del perímetro es ${resultPerimetro}</p>
    `;
};

const x = 5 ;

Square('hola mundo desde el módulo al cuadrado');