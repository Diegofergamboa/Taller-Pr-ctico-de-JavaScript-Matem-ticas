// Principal setter
import { Square , setLayoutSquare } from "./square.js";
import { Triangle , setLayoutTriangle } from "./triangle.js";
import { Circle , setLayoutCircle } from "./circle.js";


const $setterCalculator = document.querySelectorAll('.setter-calculator');


$setterCalculator.forEach(button => {
    return (
        button.addEventListener('click', (event) => {
            (event.target.textContent === 'Cálculos de cuadrado') ? setLayoutSquare() : null ;
            (event.target.textContent === 'Cálculos de triángulo') ? setLayoutTriangle() : null ;
            (event.target.textContent === 'Cálculos de circulo') ? setLayoutCircle() : null ;
        })
    )
});




// const $buttonCuadrado = document.getElementsByClassName('button-cuadrado')[0];
// $buttonCuadrado.addEventListener('click' , Square);

// const $buttonTriangulo = document.getElementsByClassName('button-triangulo')[0];
// $buttonTriangulo.addEventListener('click' , Triangle);


// const $buttonCirculo = document.getElementsByClassName('button-circulo')[0];
// $buttonCirculo.addEventListener('click', Circle);









