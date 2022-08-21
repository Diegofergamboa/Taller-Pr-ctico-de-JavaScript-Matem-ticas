// Principal setter
import { setLayoutSquare } from "./square.js";
// import { setLayoutTriangle } from "./triangle.js";
// import { setLayoutCircle } from "./circle.js";


const $setterCalculator = document.querySelectorAll('.setter-calculator');

// ! document.body.on (evento, id o clase, función a ejecutar) (primera solución) (revisar si con window o con document) (revisar listener del click)
// ! encapsulamiento.

$setterCalculator.forEach(button => {
    return (
        button.addEventListener('click', (event) => {
            (event.target.textContent === 'Cálculos de cuadrado') ? setLayoutSquare() : null ;
            (event.target.textContent === 'Cálculos de triángulo') ? setLayoutTriangle() : null ;
            (event.target.textContent === 'Cálculos de circulo') ? setLayoutCircle() : null ;
        })
    )
});






// const $buttonTriangulo = document.getElementsByClassName('button-triangulo')[0];
// $buttonTriangulo.addEventListener('click' , Triangle);


// const $buttonCirculo = document.getElementsByClassName('button-circulo')[0];
// $buttonCirculo.addEventListener('click', Circle);









